"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SendHorizonal, Bot, User, X, CornerDownLeft, Minimize2, MoreHorizontal, GripVertical } from "lucide-react";
import { useChat } from "@/hooks/use-chat";
import { cn } from "@/lib/utils";
import React, { useState, useRef, useEffect } from "react";

export default function Chat() {
  const { isOpen, setOpen } = useChat();
  const chatRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const dragStart = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (isOpen) {
      setPosition({
        x: window.innerWidth - 400 - 24, // right: 6 * 4 = 24px
        y: window.innerHeight - 600 - 80, // bottom: 20 * 4 = 80px
      });
    }
  }, [isOpen]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    // Prevent text selection while dragging
    e.preventDefault();
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      ref={chatRef}
      className="fixed h-[600px] w-[380px] z-50 flex flex-col transition-transform duration-300 ease-in-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: isDragging ? 'grabbing' : 'default',
      }}
    >
      <div className="flex flex-col bg-zinc-900 text-white h-full shadow-2xl rounded-lg">
        <div
          className="p-4 border-b border-zinc-700 flex justify-between items-center"
          onMouseDown={handleMouseDown}
          style={{ cursor: 'grab' }}
        >
          <div className="flex items-center space-x-2">
            <GripVertical className="h-5 w-5 text-zinc-500" />
            <h2 className="text-white text-lg font-semibold">YB Virtual Assistant</h2>
          </div>
          <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white h-8 w-8">
                  <MoreHorizontal className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white h-8 w-8" onClick={() => setOpen(false)}>
                  <X className="h-5 w-5" />
              </Button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="text-center text-xs text-zinc-500">Today</div>
          <div className="flex items-start gap-3">
            <div className="bg-primary/20 p-2 rounded-full">
              <Bot className="w-6 h-6 text-primary" />
            </div>
            <div className="bg-zinc-800 rounded-lg p-3 max-w-[85%]">
              <p className="text-sm">
                Hello! I am the YB Virtual Assistant. How can I help you today?
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 bg-zinc-900 border-t border-zinc-700 rounded-b-lg">
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
      </div>
    </div>
  );
}
