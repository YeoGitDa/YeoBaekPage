
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

export default function Lab3DashboardPage({ params }: { params: { labId: string } }) {

  if (params.labId !== '3') {
    notFound();
  }
  
  const isRecent = (date: Date) => {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    return date > sevenDaysAgo;
  };

  return (
    <div className="container mx-auto py-10 px-4 md:px-6 bg-background">
      <header className="mb-12">
        <h1 className="font-headline text-5xl md:text-6xl font-bold">LAB3 Dashboard</h1>
        <p className="text-lg text-muted-foreground mt-2">Curated content and recent updates from LAB3.</p>
      </header>
      
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold flex items-center">
              LAB3 : AICuration <Plus className="ml-2 h-8 w-8" />
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

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold"> 최근 업데이트 </h2>
            <p className="text-lg text-muted-foreground mt-2">최근 일주일 내의 변경사항에대한 정보 </p>
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
    </div>
  );
}
