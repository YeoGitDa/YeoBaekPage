// src/api/chatbot.ts
export async function sendMessage(message: string): Promise<string> {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
  
    if (!res.ok) {
      return "서버와 통신에 실패했어요 🥔";
    }
    const data = await res.json();
    return data.reply ?? "응답이 비어 있어요 🥔";
  }
  