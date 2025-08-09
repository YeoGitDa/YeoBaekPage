import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TestTube, Dna, Microscope, Beaker, FlaskConical, Rocket } from "lucide-react";

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

export default function LabPage() {
    return (
        <div className="bg-background text-foreground">
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
        </div>
    );
}
