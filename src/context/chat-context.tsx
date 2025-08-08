"use client";

import { createContext, useState, ReactNode } from "react";

interface ChatContextType {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

export const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <ChatContext.Provider value={{ isOpen, setOpen }}>
      {children}
    </ChatContext.Provider>
  );
}
