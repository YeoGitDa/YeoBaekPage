

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star, Plus, Bot, Archive, GitBranch, Trophy, Lightbulb } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const labInfo: { [key: string]: { title: string; description: string; icon: React.ElementType, content?: React.ReactNode} } = {
  '1': {
    title: "AI Assistant",
    description: "AI기반 자동화 어시스텀트를 구현하고 챗봇을 통해 자료 검색 기능을 제공하는 LAB입니다.",
    icon: Bot,
  },
  '2': {
    title: "Archiving",
    description: "동아리 내 문서/기획서 등 학술 자료의 체계적인 저장, 공유하는 기능을 제공하는 LAB 입니다.",
    icon: Archive,
  },
  '3': {
    title: "AI Curation",
    description: "문헌정보학 기반 개인 맞춤형 도서 추천과 동아리 구성원들의 산출물을 큐레이팅 하는 LAB입니다.",
    icon: Star,
  },
  '4': {
    title: "Infra",
    description: "Git, CI/CD, Firebase 연동 및 배포 실험을 위한 LAB입니다.",
    icon: GitBranch,
  },
  '5': {
    title: "Competition",
    description: "대외활동 기반 앱/웹 프로젝트 고도화하는 LAB입니다.",
    icon: Trophy,
  },
  '6': {
    title: "Idea",
    description: "아이디어 기록, 발굴 및 실현하는 LAB입니다.",
    icon: Lightbulb,
  },
};

const recommendedBooks = [
  {
    title: "단 한 사람",
    author: "최진영",
    genre: "장편소설",
    image: "https://picsum.photos/seed/1/300/300",
    aiHint: "tree snow",
    href: "/lab/1",
  },
  {
    title: "어떤 비밀",
    author: "최진영",
    genre: "산문",
    image: "https://picsum.photos/seed/2/300/300",
    aiHint: "washing hands",
    href: "/lab/2",
  },
  {
    title: "해가 지는 곳으로",
    author: "최진영",
    genre: "장편소설",
    image: "https://picsum.photos/seed/3/300/300",
    aiHint: "moon space",
    href: "/lab/3",
  },
    {
    title: "단 한 사람",
    author: "최진영",
    genre: "장편소설",
    image: "https://picsum.photos/seed/4/300/300",
    aiHint: "tree snow",
    href: "/lab/4",
  },
  {
    title: "어떤 비밀",
    author: "최진영",
    genre: "산문",
    image: "https://picsum.photos/seed/5/300/300",
    aiHint: "washing hands",
    href: "/lab/5",
  },
  {
    title: "해가 지는 곳으로",
    author: "최진영",
    genre: "장편소설",
    image: "https://picsum.photos/seed/6/300/300",
    aiHint: "moon space",
    href: "/lab/6",
  },
];

const Lab3Content = () => (
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
            }}
            className="w-full"
          >
            <CarouselContent>
              {recommendedBooks.map((book, index) => (
                <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6">
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
);

const DefaultLabContent = ({ labId }: { labId: string }) => {
    const lab = labInfo[labId];
    if (!lab) return null;
    const Icon = lab.icon;

    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4">
                        <Icon className="h-12 w-12 text-primary" />
                    </div>
                    <h2 className="font-headline text-4xl font-bold mb-4">{lab.title}</h2>
                    <p className="text-lg text-muted-foreground">
                        {lab.description}
                    </p>
                    <p className="text-sm text-muted-foreground mt-8">(This is a placeholder for LAB {labId}. Content to be added.)</p>
                </div>
            </div>
        </section>
    );
};


export default function LabDashboardPage({ params }: { params: { labId: string } }) {
  const { labId } = params;
  const lab = labInfo[labId];

  if (!lab) {
    notFound();
  }

  return (
    <div className="container mx-auto py-10 px-4 md:px-6 bg-background">
      <header className="mb-12">
        <h1 className="font-headline text-5xl md:text-6xl font-bold">LAB{labId} Dashboard</h1>
        <p className="text-lg text-muted-foreground mt-2">{lab.description}</p>
      </header>

      {labId === '3' ? <Lab3Content /> : <DefaultLabContent labId={labId} />}
      
    </div>
  );
}
