import { NextRequest } from "next/server";
import { GoogleGenAI } from "@google/genai";   // npm i @google/genai

export const runtime = "nodejs";

const MODEL = process.env.GEMINI_MODEL ?? "gemini-2.5-pro"; // ← env 우선, 없으면 2.5-pro
const API_KEY = process.env.GOOGLE_API_KEY!;
const genai = new GoogleGenAI({ apiKey: API_KEY });

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const message = searchParams.get("q") ?? "";
    const sid = searchParams.get("sid") ?? "anon";
    if (!API_KEY) return new Response("missing GOOGLE_API_KEY", { status: 500 });
    if (!message) return new Response("missing q", { status: 400 });

    // (선택) 간단 멀티턴 히스토리 – 필요시 Map/Redis로 유지
    const contents = [{ role: "user", parts: [{ text: `너는 말하는 감자야. 간결하게 답해줘.\n사용자: ${message}` }] }];

    const streamResp = await genai.models.generateContentStream({
      model: MODEL,          // ← 여기서 env의 2.5-pro 사용
      contents,
    });

    const encoder = new TextEncoder();

    return new Response(
      new ReadableStream({
        async start(controller) {
          let acc = "";
          try {
            for await (const chunk of streamResp) {
              const text: string | undefined = chunk.text;
              if (text) {
                acc += text;
                controller.enqueue(encoder.encode(`data: ${JSON.stringify({ text })}\n\n`));
              }
            }
            controller.close();
          } catch (err) {
            controller.error(err);
          }
        },
      }),
      {
        headers: {
          "Content-Type": "text/event-stream",
          "Cache-Control": "no-cache",
          Connection: "keep-alive",
        },
      }
    );
  } catch (err) {
    console.error("stream error:", err);
    return new Response("internal server error", { status: 500 });
  }
}
