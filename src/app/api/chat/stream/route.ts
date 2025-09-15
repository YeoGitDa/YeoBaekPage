import { NextRequest } from "next/server";
import { GoogleGenAI } from "@google/genai";

export const runtime = "nodejs";
const MODEL = process.env.GEMINI_MODEL ?? "gemini-2.5-pro";
const API_KEY = process.env.GOOGLE_API_KEY!;

export async function GET(req: NextRequest) {
  // ① 요청 파라미터 확인
  const { searchParams } = new URL(req.url);
  const message = searchParams.get("q") ?? "";
  const sid = searchParams.get("sid") ?? "anon";
  console.log("[/api/chat/stream] q=", message, " sid=", sid);

  if (!API_KEY) return new Response("missing GOOGLE_API_KEY", { status: 500 });
  if (!message) return new Response("missing q", { status: 400 });

  const genai = new GoogleGenAI({ apiKey: API_KEY });

  try {
    // ② 모델 호출 전 로그
    console.log("[stream] call model:", MODEL);
    const streamResp = await genai.models.generateContentStream({
      model: MODEL,
      contents: [{ role: "user", parts: [{ text: message }]}],
    });

    const encoder = new TextEncoder();

    return new Response(
      new ReadableStream({
        async start(controller) {
          let acc = "";
          try {
            // ③ 청크 단위로 뭐가 오는지 그대로 찍어보기
            for await (const chunk of streamResp) {
              console.log("[chunk raw]:", chunk); // 구조 확인용
              const text: string | undefined = chunk.text;
              console.log("[chunk text]:", text);

              if (text) {
                acc += text;
                controller.enqueue(
                  encoder.encode(`data: ${JSON.stringify({ text })}\n\n`)
                );
              }
            }
            console.log("[stream end] final acc:", acc);
            controller.close();
          } catch (err) {
            console.error("[stream loop error]", err);
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ text: "⚠️ stream error" })}\n\n`));
            controller.close();
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
  } catch (e) {
    console.error("[/api/chat/stream] error:", e);
    return new Response("internal error", { status: 500 });
  }
}
