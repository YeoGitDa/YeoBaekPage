"use client";

import { useChat } from "@/hooks/use-chat";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SendHorizonal, Bot } from "lucide-react";

export default function Chat() {
  const { isOpen, setOpen } = useChat();

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetContent className="flex flex-col w-full sm:max-w-lg">
        <SheetHeader className="pr-10">
          <SheetTitle>Chat with LabLustre AI</SheetTitle>
          <SheetDescription>
            Ask me anything about our services, research, or labs.
          </SheetDescription>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Placeholder for chat messages */}
          <div className="flex items-start gap-3">
            <div className="bg-primary/10 p-2 rounded-full">
              <Bot className="w-6 h-6 text-primary" />
            </div>
            <div className="bg-muted rounded-lg p-3 max-w-[80%]">
              <p className="text-sm">
                Hello! How can I assist you today? You can ask me about our labs, services, or ongoing research.
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 bg-background border-t">
          <form className="flex items-center gap-2">
            <Input
              type="text"
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button type="submit" size="icon">
              <SendHorizonal className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </div>
      </SheetContent>
    </Sheet>
  );
}
