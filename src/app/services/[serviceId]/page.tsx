
import { services } from "@/data/services";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Calendar, BrainCircuit, Code, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ServiceDetailPage({ params }: { params: { serviceId: string } }) {
  const service = services.find((s) => s.slug === params.serviceId);

  if (!service) {
    notFound();
  }

  const { title, image, aiHint, details } = service;

  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto py-10 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Button asChild variant="ghost">
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Services
                </Link>
            </Button>
          </div>

          <article>
            <header className="mb-8">
              <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4">{title}</h1>
              <div className="relative h-80 w-full rounded-lg overflow-hidden mb-6">
                <Image
                  src={image}
                  alt={title}
                  data-ai-hint={aiHint}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{details.developingDays}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BrainCircuit className="h-4 w-4" />
                  <span>{details.subject}</span>
                </div>
              </div>
            </header>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="lead text-xl text-muted-foreground">
                {details.longDescription}
              </p>
              
              <div className="mt-8">
                <h2 className="font-headline text-2xl font-bold mb-4 flex items-center gap-2">
                    <Code className="h-6 w-6" />
                    Software & Technologies
                </h2>
                <div className="flex flex-wrap gap-2">
                  {details.sw.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
