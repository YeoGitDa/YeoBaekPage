"use client";

import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useChat } from "@/hooks/use-chat";

export default function ChatFAB() {
  const { setOpen } = useChat();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="icon"
        className="rounded-full w-14 h-14 shadow-lg"
        onClick={() => setOpen(true)}
      >
        <MessageSquare className="h-6 w-6" />
        <span className="sr-only">Open Chat</span>
      </Button>
    </div>
  );
}
