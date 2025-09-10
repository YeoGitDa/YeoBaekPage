
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-5xl md:text-6xl font-bold">Our Functions</h1>
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
                <Link href={`/services/${service.slug}`}>
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
