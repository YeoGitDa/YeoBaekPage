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
import { SendHorizonal, Bot, User, X, CornerDownLeft, Minimize2, MoreHorizontal } from "lucide-react";

export default function Chat() {
  const { isOpen, setOpen } = useChat();

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetContent className="flex flex-col w-full sm:max-w-md bg-zinc-900 text-white border-zinc-700 p-0">
        <SheetHeader className="p-4 border-b border-zinc-700">
          <div className="flex justify-between items-center">
             <SheetTitle className="text-white">LabLustre Virtual Assistant</SheetTitle>
             <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white h-8 w-8">
                    <MoreHorizontal className="h-5 w-5" />
                </Button>
                 <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white h-8 w-8">
                    <CornerDownLeft className="h-5 w-5" />
                </Button>
                 <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white h-8 w-8">
                    <Minimize2 className="h-5 w-5" />
                </Button>
                 <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white h-8 w-8" onClick={() => setOpen(false)}>
                    <X className="h-5 w-5" />
                </Button>
             </div>
          </div>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="text-center text-xs text-zinc-500">Today</div>
          <div className="flex items-start gap-3">
            <div className="bg-primary/20 p-2 rounded-full">
              <Bot className="w-6 h-6 text-primary" />
            </div>
            <div className="bg-zinc-800 rounded-lg p-3 max-w-[85%]">
              <p className="text-sm">
                Hello! I am the LabLustre Virtual Assistant. How can I help you today?
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 bg-zinc-900 border-t border-zinc-700">
          <form className="flex items-center gap-2">
            <Input
              type="text"
              placeholder="Enter your message here"
              className="flex-1 bg-zinc-800 border-zinc-600 text-white placeholder-zinc-400 focus-visible:ring-primary"
            />
            <Button type="submit" size="icon" className="bg-primary hover:bg-primary/90">
              <SendHorizonal className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
           <p className="text-xs text-zinc-500 mt-2 text-center">
            AI-generated responses may be inaccurate. Please verify important information.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
