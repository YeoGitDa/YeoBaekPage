

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const recommendedBooks = [
  {
    title: "단 한 사람",
    author: "최진영",
    genre: "장편소설",
    image: "https://picsum.photos/300/300",
    aiHint: "tree snow",
    href: "/lab/1",
  },
  {
    title: "어떤 비밀",
    author: "최진영",
    genre: "산문",
    image: "https://picsum.photos/300/300",
    aiHint: "washing hands",
    href: "/lab/2",
  },
  {
    title: "해가 지는 곳으로",
    author: "최진영",
    genre: "장편소설",
    image: "https://picsum.photos/300/300",
    aiHint: "moon space",
    href: "/lab/3",
  },
    {
    title: "단 한 사람",
    author: "최진영",
    genre: "장편소설",
    image: "https://picsum.photos/300/300",
    aiHint: "tree snow",
    href: "/lab/4",
  },
  {
    title: "어떤 비밀",
    author: "최진영",
    genre: "산문",
    image: "https://picsum.photos/300/300",
    aiHint: "washing hands",
    href: "/lab/5",
  },
  {
    title: "해가 지는 곳으로",
    author: "최진영",
    genre: "장편소설",
    image: "https://picsum.photos/300/300",
    aiHint: "moon space",
    href: "/lab/6",
  },
];

export default function LabDashboardPage({ params }: { params: { labId: string } }) {

  return (
    <div className="container mx-auto py-10 px-4 md:px-6 bg-background">
      <header className="mb-12">

        <h1 className="font-headline text-5xl md:text-6xl font-bold">LAB{params.labId} Dashboard</h1>
        <p className="text-lg text-muted-foreground mt-2">Curated content and recent updates from LAB{params.labId}.</p>
      </header>
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold flex items-center">
              LAB{params.labId} : AICuration <Plus className="ml-2 h-8 w-8" />
            </h2>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {recommendedBooks.map((book, index) => (
                <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                  <div className="p-1">
                    <Card className="overflow-hidden">
                      <Link href={book.href}>
                        <CardContent className="p-0">
                          <div className="relative aspect-square w-full">
                            <Image
                              src={book.image}
                              alt={book.title}
                              data-ai-hint={book.aiHint}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </CardContent>
                      </Link>
                    </Card>
                    <div className="pt-4 text-center">
                      <p className="font-semibold">{`${book.title} : ${book.author}`}</p>
                      <p className="text-sm text-muted-foreground">{book.genre}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </div>
  );
}
