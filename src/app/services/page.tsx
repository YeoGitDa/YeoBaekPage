import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Genetic Sequencing",
    description: "High-throughput DNA and RNA sequencing services with comprehensive bioinformatics analysis. Uncover genetic markers and variations with unparalleled accuracy.",
    image: "https://placehold.co/600x400.png",
    aiHint: "dna microscope"
  },
  {
    title: "Proteomics Analysis",
    description: "Advanced mass spectrometry for protein identification, quantification, and post-translational modification analysis. Your key to understanding cellular function.",
    image: "https://placehold.co/600x400.png",
    aiHint: "protein structure"
  },
  {
    title: "Cellular Imaging",
    description: "State-of-the-art microscopy and imaging techniques to visualize cellular structures and processes in real-time. See the unseen world inside the cell.",
    image: "https://placehold.co/600x400.png",
    aiHint: "cells microscope"
  },
  {
    title: "Metabolomics Profiling",
    description: "Comprehensive analysis of small-molecule metabolites. Gain insights into metabolic pathways and disease states for biomarker discovery and research.",
    image: "https://placehold.co/600x400.png",
    aiHint: "chemistry lab"
  },
  {
    title: "Bio-Assay Development",
    description: "Custom assay design, validation, and screening services to accelerate your drug discovery and development pipeline. Reliable results, faster decisions.",
    image: "https://placehold.co/600x400.png",
    aiHint: "lab research"
  },
  {
    title: "Data Analytics & Consultation",
    description: "Expert consultation and bespoke data analysis solutions to help you interpret complex biological data and extract meaningful, actionable insights.",
    image: "https://placehold.co/600x400.png",
    aiHint: "data visualization"
  }
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-5xl md:text-6xl font-bold">Our Services</h1>
        <p className="text-lg text-muted-foreground mt-2">Precision-driven solutions for complex scientific challenges.</p>
      </header>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.title} className="flex flex-col overflow-hidden hover:shadow-lg hover:shadow-primary/20 transition-shadow duration-300 bg-card">
            <div className="relative h-56 w-full">
              <Image
                src={service.image}
                alt={service.title}
                data-ai-hint={service.aiHint}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="link" className="text-primary p-0 h-auto hover:no-underline">
                <Link href="#">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
