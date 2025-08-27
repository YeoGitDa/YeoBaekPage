
"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SendHorizonal, Bot, User, X, GripVertical, MoreHorizontal } from "lucide-react";
import { useChat } from "@/hooks/use-chat";
import React, { useState, useRef, useEffect } from "react";
import { chat } from "@/ai/flows/chat-flow";
import { ScrollArea } from "./ui/scroll-area";

interface Message {
  role: "user" | "bot";
  text: string;
}

export default function Chat() {
  const { isOpen, setOpen } = useChat();
  const chatRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const dragStart = useRef({ x: 0, y: 0 });

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hello! I am Yeobaek-bot. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);


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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const botResponse = await chat(input);
      const botMessage: Message = { role: "bot", text: botResponse };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chatbot error:", error);
      const errorMessage: Message = { role: "bot", text: "Sorry, something went wrong." };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // @ts-ignore
    scrollAreaRef.current?.scrollTo({
      top: scrollAreaRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages]);


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
            <h2 className="text-white text-lg font-semibold">Yeobaek-bot</h2>
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
        <ScrollArea className="flex-1" ref={scrollAreaRef}>
          <div className="p-6 space-y-6">
            <div className="text-center text-xs text-zinc-500">Today</div>
            {messages.map((message, index) => (
              <div key={index} className={`flex items-start gap-3 ${message.role === 'user' ? 'justify-end' : ''}`}>
                {message.role === 'bot' && (
                  <div className="bg-primary/20 p-2 rounded-full">
                    <Bot className="w-6 h-6 text-primary" />
                  </div>
                )}
                 <div className={`${message.role === 'bot' ? 'bg-zinc-800' : 'bg-primary text-white'} rounded-lg p-3 max-w-[85%]`}>
                  <p className="text-sm">{message.text}</p>
                </div>
                {message.role === 'user' && (
                  <div className="bg-zinc-700 p-2 rounded-full">
                    <User className="w-6 h-6 text-zinc-300" />
                  </div>
                )}
              </div>
            ))}
             {isLoading && (
              <div className="flex items-start gap-3">
                 <div className="bg-primary/20 p-2 rounded-full">
                    <Bot className="w-6 h-6 text-primary" />
                  </div>
                  <div className="bg-zinc-800 rounded-lg p-3 max-w-[85%]">
                      <p className="text-sm">...</p>
                  </div>
              </div>
            )}
          </div>
        </ScrollArea>
        <div className="p-4 bg-zinc-900 border-t border-zinc-700 rounded-b-lg">
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <Input
              type="text"
              placeholder="Enter your message here"
              className="flex-1 bg-zinc-800 border-zinc-600 text-white placeholder-zinc-400 focus-visible:ring-primary"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
            />
            <Button type="submit" size="icon" className="bg-primary hover:bg-primary/90" disabled={isLoading}>
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
