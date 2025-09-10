import type { Metadata } from 'next';
import './globals.css';
import { cn } from "@/lib/utils";
import Navigation from '@/components/navigation';
import { Toaster } from '@/components/ui/toaster';
import Footer from '@/components/footer';
import Chat from '@/components/chat';
import ChatFAB from '@/components/chat-fab';
import { ChatProvider } from '@/context/chat-context';
import { AuthProvider } from '@/context/auth-context';

export const metadata: Metadata = {
  title: 'YB',
  description: 'Welcome to YB, where innovation meets precision.',
viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1
},
verification: {
    google: 'U_DViqUesfC_8iagWAFJeoJlE3g4aj55I-aTkgaxPeg',
}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body antialiased")}>
        <AuthProvider>
          <ChatProvider>
            <div className="flex flex-col min-h-screen">
              <Navigation />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>
            <Chat />
            <Toaster />
            <ChatFAB />
          </ChatProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
