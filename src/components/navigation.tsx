"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Rocket } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Logo from "@/components/logo";
import { cn } from "@/lib/utils";
import { useChat } from "@/hooks/use-chat";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/lab", label: "LAB" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

const Navigation = () => {
  const pathname = usePathname();
  const { isOpen, setOpen } = useChat();


  const handleGetStarted = () => {
    setOpen(true);
  }

  const NavLinks = ({ className }: { className?: string }) => (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname.startsWith(link.href) && link.href !== "/" || pathname === link.href ? "text-primary" : "text-foreground/80"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <div className="mr-8 hidden md:flex">
          <Logo />
        </div>
        <div className="hidden md:flex flex-1 items-center justify-start">
          <NavLinks />
        </div>
        <div className="hidden md:flex items-center justify-end">
          <Button onClick={handleGetStarted}>
            <Rocket className="mr-2 h-4 w-4" />
            Get Started
          </Button>
        </div>
        <div className="md:hidden flex flex-1 items-center justify-between">
          <Logo />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Navigation</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
              <div className="p-4">
                <Logo />
                <div className="flex flex-col space-y-4 pt-10">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-primary",
                        pathname.startsWith(link.href) && link.href !== "/" || pathname === link.href ? "text-primary" : "text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button className="mt-4" onClick={handleGetStarted}>
                    <Rocket className="mr-2 h-4 w-4" />
                    Get Started
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
