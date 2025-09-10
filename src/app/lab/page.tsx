
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const labFeatures = [
    {
        icon: "/AI.png",
        title: "LAB 1",
        description: " AI기반 자동화 어시스텀트를 구현하고 챗봇을 통해 자료 검색 기능을 제공하는 LAB입니다.  ",
        href: "/lab/1",
    },
    {
        icon: "/Archive.png",
        title: "LAB 2",
        description: " 동아리 내 문서/기획서 등 학술 자료의 체계적인 저장, 공유하는 기능을 제공하는 LAB 입니다.",
        href: "/lab/2",
    },
    {
        icon: "/Curation.png",
        title: "LAB 3",
        description: "문헌정보학 기반 개인 맞춤형 도서 추천과 동아리 구성원들의 산출물을 큐레이팅 하는 LAB입니다. ",
        href: "/lab/3",
    },
    {
        icon: "/Infra.png",
        title: "LAB 4",
        description: "Git, CI/CD, Firebase 연동 및 배포 실험을 위한 LAB입니다. ",
        href: "/lab/4",
    },
    {
        icon: "/Compition.png",
        title: "LAB 5",
        description: "대외활동 기반 앱/웹 프로젝트 고도화하는 LAB입니다. ",
        href: "/lab/5",
    },
    {
        icon:"/Idea.png",
        title: "LAB 6",
        description: "아이디어 기록, 발굴 및 실현하는 LAB입니다. ",
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
                                <Image src={feature.icon} alt={`${feature.title} icon`} width={32} height={32} className="h-8 w-8 text-primary" />
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
