import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TestTube, Dna, Microscope, Beaker, FlaskConical, Rocket } from "lucide-react";

const labFeatures = [
  {
    icon: TestTube,
    title: "Lab 1",
    description: "Advanced diagnostics and sample testing.",
  },
  {
    icon: Dna,
    title: "Lab 2",
    description: "Genetic research and DNA sequencing.",
  },
  {
    icon: Microscope,
    title: "Lab 3",
    description: "Microscopic analysis and imaging.",
  },
  {
    icon: Beaker,
    title: "Lab 4",
    description: "Chemical synthesis and experimentation.",
  },
  {
    icon: FlaskConical,
    title: "Lab 5",
    description: "Biochemical assays and analysis.",
  },
  {
    icon: Rocket,
    title: "Lab 6",
    description: "Propelling research to new frontiers.",
  },
];


export default function Home() {
  return (
    <>
      <section className="relative h-[calc(80vh)] w-full flex items-center justify-center text-center">
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
            YeoBaek Hub <br />
          </h1>
          <p className="text-lg md:text-xl text-neutral-200 max-w-2xl mx-auto mb-8">
            
            Join and Meet a new RIS World ! All of article update is Up-to-date
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

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Lab Info</h2>
            <p className="text-lg text-muted-foreground mt-2">Discover our state-of-the-art facilities.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {labFeatures.map((feature) => (
              <Card key={feature.title}>
                <CardHeader className="items-center text-center">
                  <div className="p-4 bg-primary/10 rounded-full mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}