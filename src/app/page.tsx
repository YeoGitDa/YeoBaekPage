
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TestTube, Dna, Microscope, Beaker, FlaskConical, Rocket, ArrowRight, Star } from "lucide-react";

const labFeatures = [
  {
    icon: TestTube,
    title: "LAB 1",
    description: "Advanced diagnostics and sample testing.",
    href: "/lab/1",
  },
  {
    icon: Dna,
    title: "LAB 2",
    description: "Genetic research and DNA sequencing.",
    href: "/lab/2",
  },
  {
    icon: Microscope,
    title: "LAB 3",
    description: "Microscopic analysis and imaging.",
    href: "/lab/3",
  },
  {
    icon: Beaker,
    title: "LAB 4",
    description: "Chemical synthesis and experimentation.",
    href: "/lab/4",
  },
  {
    icon: FlaskConical,
    title: "LAB 5",
    description: "Biochemical assays and analysis.",
    href: "/lab/5",
  },
  {
    icon: Rocket,
    title: "LAB 6",
    description: "Propelling research to new frontiers.",
    href: "/lab/6",
  },
];

const introCards = [
    {
        image: "https://placehold.co/600x400.png",
        aiHint: "woman running",
        title: "Healthcare for Everyone",
        description: "We are committed to providing accessible and affordable healthcare solutions for individuals from all walks of life, ensuring a healthier future for everyone.",
        href: "/lab/1"
    },
    {
        image: "https://placehold.co/600x400.png",
        aiHint: "lab research",
        title: "Over 10 Years of Service in Asia",
        description: "With a decade of dedicated service, we have established ourselves as a trusted partner in the Asian healthcare landscape, delivering excellence and innovation.",
        href: "/lab/2"
    },
    {
        image: "https://placehold.co/600x400.png",
        aiHint: "doctor data",
        title: "Customer-Centric & Friendly",
        description: "Our approach is built on a foundation of trust and open communication, ensuring a friendly and supportive experience for all our clients.",
        href: "/lab/3"
    }
]

const recentUpdates = [
  {
    lab: "LAB 1",
    update: "New diagnostic protocol for viral loads deployed.",
    date: new Date(new Date().setDate(new Date().getDate() - 2)),
    href: "/lab/1",
  },
  {
    lab: "LAB 3",
    update: "Upgraded imaging software to version 3.1, enhancing resolution by 15%.",
    date: new Date(new Date().setDate(new Date().getDate() - 5)),
    href: "/lab/3",
  },
  {
    lab: "LAB 2",
    update: "Completed sequencing for the 'Azure' cohort study.",
    date: new Date(new Date().setDate(new Date().getDate() - 8)),
    href: "/lab/2",
  },
  {
    lab: "LAB 5",
    update: "Published findings on metabolic pathway P-450 in 'Nature Protocols'.",
    date: new Date(new Date().setDate(new Date().getDate() - 12)),
    href: "/lab/5",
  },
  {
    lab: "LAB 4",
    update: "Synthesized three new chemical compounds for testing.",
    date: new Date(new Date().setDate(new Date().getDate() - 20)),
    href: "/lab/4",
  }
];


export default function Home() {
  const isRecent = (date: Date) => {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    return date > sevenDaysAgo;
  };

  return (
    <>
      <section className="relative h-[calc(80vh)] w-full flex items-center justify-center text-center">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src="/1920x1080main_gradient_enhanced.png"
            alt="bg"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight">
            YeoBaek Hub <br />
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            
            Join and Meet a new RIS World ! All of article update is Up-to-date
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="font-bold text-base">
              <Link href="/lab/1">Explore The LAB</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="font-bold text-base">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 bg-background">
        <div className="absolute inset-0">
          <Image
            src="/1920x1080main.png"
            alt="background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 md:px-6">
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
                                <Link href={card.href}>
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
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Recent Updates</h2>
            <p className="text-lg text-muted-foreground mt-2">Latest news and breakthroughs from our labs.</p>
          </div>
          <Card>
            <CardContent className="p-0">
              <div className="divide-y divide-border">
                {recentUpdates.map((item) => (
                  <Link href={item.href} key={item.lab + item.update} className="block hover:bg-muted/50 transition-colors">
                    <div className="flex items-center p-4">
                      <div className="w-8 text-center">
                        {isRecent(item.date) && <Star className="h-5 w-5 text-yellow-500 fill-yellow-400" />}
                      </div>
                      <div className="flex-1 ml-4">
                        <p className="font-semibold text-sm">
                          <span className="font-bold">{item.lab}:</span> {item.update}
                        </p>
                      </div>
                      <p className="text-xs text-muted-foreground">{item.date.toLocaleDateString()}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">LAB Info</h2>
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
