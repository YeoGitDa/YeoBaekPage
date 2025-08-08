import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TestTube, Dna, Microscope, Beaker, FlaskConical, Rocket, PlusCircle } from "lucide-react";

const labFeatures = [
  {
    icon: TestTube,
    title: "Lab 1",
    description: "Advanced diagnostics and sample testing.",
    href: "/lab/1",
  },
  {
    icon: Dna,
    title: "Lab 2",
    description: "Genetic research and DNA sequencing.",
    href: "/lab/2",
  },
  {
    icon: Microscope,
    title: "Lab 3",
    description: "Microscopic analysis and imaging.",
    href: "/lab/3",
  },
  {
    icon: Beaker,
    title: "Lab 4",
    description: "Chemical synthesis and experimentation.",
    href: "/lab/4",
  },
  {
    icon: FlaskConical,
    title: "Lab 5",
    description: "Biochemical assays and analysis.",
    href: "/lab/5",
  },
  {
    icon: Rocket,
    title: "Lab 6",
    description: "Propelling research to new frontiers.",
    href: "/lab/6",
  },
];

const introCards = [
    {
        image: "https://placehold.co/600x400.png",
        aiHint: "woman running",
        title: "Healthcare for Everyone",
    },
    {
        image: "https://placehold.co/600x400.png",
        aiHint: "lab research",
        title: "Over 10 Years of Service in Asia",
    },
    {
        image: "https://placehold.co/600x400.png",
        aiHint: "doctor data",
        title: "Customer-Centric & Friendly",
    }
]


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
            <div className="md:flex md:items-end md:justify-between mb-12">
                <div className="max-w-xl">
                    <h2 className="font-headline text-4xl md:text-5xl font-bold">From Treatment to Prevention, a Healthcare Paradigm Shift</h2>
                    <p className="text-lg text-muted-foreground mt-4">As a leading DTC genetic testing company, we possess a uniquely diverse range of testing items to provide unbiased, gene-based research and customer service.</p>
                </div>
                <Button variant="link" asChild className="text-md mt-4 md:mt-0">
                    <Link href="#">View More &rarr;</Link>
                </Button>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
                {introCards.map((card, index) => (
                    <div key={index} className="group">
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg mb-4">
                            <Image
                                src={card.image}
                                alt={card.title}
                                data-ai-hint={card.aiHint}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                             <div className="absolute bottom-3 right-3">
                                <div className="bg-primary/80 text-primary-foreground rounded-full p-2 transition-colors duration-300 group-hover:bg-primary">
                                    <PlusCircle className="h-5 w-5" />
                                </div>
                            </div>
                        </div>
                        <h3 className="text-lg font-semibold text-center">{card.title}</h3>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Lab Info</h2>
            <p className="text-lg text-muted-foreground mt-2">Discover our state-of-the-art facilities.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {labFeatures.map((feature) => (
              <Link href={feature.href} key={feature.title} className="flex">
                <Card className="w-full hover:shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
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
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
