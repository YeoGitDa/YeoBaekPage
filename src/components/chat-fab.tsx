"use client";

import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "./ui/sidebar";

export default function ChatFAB() {
  const { open, toggleSidebar } = useSidebar();

  const handleClick = () => {
    toggleSidebar();
  }

  if (open) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="icon"
        className="rounded-full w-14 h-14 shadow-lg"
        onClick={handleClick}
      >
        <MessageSquare className="h-6 w-6" />
        <span className="sr-only">Open Chat</span>
      </Button>
    </div>
  );
}
