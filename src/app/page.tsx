import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TestTube, Dna, Microscope, Beaker, FlaskConical, Rocket, ArrowRight, Activity } from "lucide-react";

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
        description: "We are committed to providing accessible and affordable healthcare solutions for individuals from all walks of life, ensuring a healthier future for everyone."
    },
    {
        image: "https://placehold.co/600x400.png",
        aiHint: "lab research",
        title: "Over 10 Years of Service in Asia",
        description: "With a decade of dedicated service, we have established ourselves as a trusted partner in the Asian healthcare landscape, delivering excellence and innovation."
    },
    {
        image: "https://placehold.co/600x400.png",
        aiHint: "doctor data",
        title: "Customer-Centric & Friendly",
        description: "Our approach is built on a foundation of trust and open communication, ensuring a friendly and supportive experience for all our clients."
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
          <div className="absolute top-0 left-0 w-full h-full bg-white/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold text-black mb-4 leading-tight">
            YeoBaek Hub <br />
          </h1>
          <p className="text-lg md:text-xl text-neutral-800 max-w-2xl mx-auto mb-8">
            
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
                <h2 className="font-headline text-4xl md:text-5xl font-bold">From Treatment to Prevention, a Healthcare Paradigm Shift</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">As a leading DTC genetic testing company, we possess a uniquely diverse range of testing items to provide unbiased, gene-based research and customer service.</p>
            </div>
            <div className="grid gap-12 md:gap-16">
                {introCards.map((card, index) => (
                    <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
                        <div className={`relative aspect-video w-full overflow-hidden rounded-lg ${index % 2 === 1 ? 'md:order-last' : ''}`}>
                            <Image
                                src={card.image}
                                alt={card.title}
                                data-ai-hint={card.aiHint}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-headline text-3xl font-bold">{card.title}</h3>
                            <p className="text-muted-foreground">{card.description}</p>
                            <Button asChild variant="link" className="p-0 h-auto">
                                <Link href="#">
                                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">진행 작업</h2>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                <span>[업데이트 안내: 신규 및 현황]</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>[25] 온보딩 교육 자료 생산 (신규)</li>
                <li>[25] 디자인/CI 규정 (진행 중)</li>
                <li>[25] Yeobaek Hub React 작업 (진행 중)</li>
              </ol>
            </CardContent>
            <CardFooter>
              <p className="text-xs text-muted-foreground">[최근 업데이트: 25. 07. 31. 0030]</p>
            </CardFooter>
          </Card>
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
