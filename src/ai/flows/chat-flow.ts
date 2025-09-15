// src/ai/flows/chat-flow.ts
"use server";

/**
 * 서버 프록시(/api/chat)를 통해 Gemini 호출.
 * 기존 UI와의 호환을 위해 시그니처 유지.
 */
export async function chat(message: string): Promise<string> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
      // Next.js server action 환경에서도 동작하도록 기본 옵션만 사용
    });

    if (!res.ok) {
      return "죄송합니다, 서버 오류가 발생했어요 🥔";
    }
    const data = await res.json();
    return (data.reply as string) ?? "응답이 비어 있어요 🥔";
  } catch (e) {
    console.error("[chat-flow] error:", e);
    return "네트워크 오류로 실패했어요 🥔";
  }
}
