import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="relative h-[calc(100vh-4rem)] w-full flex items-center justify-center text-center">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Abstract laboratory background"
          data-ai-hint="laboratory abstract"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/70" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight">
          Unveiling the Future, One Discovery at a Time.
        </h1>
        <p className="text-lg md:text-xl text-neutral-200 max-w-2xl mx-auto mb-8">
          At LabLustre, we merge cutting-edge technology with scientific expertise to push the boundaries of innovation. Explore our world.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg" className="font-bold text-base">
            <Link href="/lab">Explore The Lab</Link>
          </Button>
          <Button asChild size="lg" variant="secondary" className="font-bold text-base">
            <Link href="/services">Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
