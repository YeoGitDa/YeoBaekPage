import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Briefcase, Calendar, Target, Users, Zap } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Evelyn Reed",
    role: "Founder & CEO",
    avatar: "https://placehold.co/128x128.png",
    aiHint: "woman portrait"
  },
  {
    name: "Dr. Marcus Thorne",
    role: "Head of Research",
    avatar: "https://placehold.co/128x128.png",
    aiHint: "man portrait"
  },
  {
    name: "Dr. Lena Petrova",
    role: "Lead Geneticist",
    avatar: "https://placehold.co/128x128.png",
    aiHint: "woman scientist"
  },
  {
    name: "Dr. Kenji Tanaka",
    role: "Chief Technology Officer",
    avatar: "https://placehold.co/128x128.png",
    aiHint: "man engineer"
  },
];

const historyEvents = [
    { year: "2010", event: "LabLustre is founded with a mission to revolutionize diagnostic medicine." },
    { year: "2012", event: "Opened our first state-of-the-art laboratory facility." },
    { year: "2015", event: "Launched our flagship genetic sequencing service, achieving 99.9% accuracy." },
    { year: "2018", event: "Expanded our operations to Asia, opening a new hub in Seoul." },
    { year: "2021", event: "Received the 'Innovator of the Year' award for our work in proteomics." },
    { year: "2024", event: "Launched the YeoBaek Hub to foster global research collaboration." },
];

const values = [
    {
        icon: Target,
        title: "Precision",
        description: "We are committed to the highest standards of accuracy and reliability in every test we perform.",
    },
    {
        icon: Zap,
        title: "Innovation",
        description: "We constantly push the boundaries of science and technology to develop groundbreaking solutions.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "We believe that the greatest discoveries are made when we work together with our partners and clients.",
    },
    {
        icon: Briefcase,
        title: "Integrity",
        description: "We operate with unwavering ethics and transparency, earning the trust of those we serve.",
    }
]

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="relative h-[50vh] w-full flex items-center justify-center text-center">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src="https://placehold.co/1920x800.png"
            alt="A modern laboratory"
            data-ai-hint="modern laboratory"
            fill
            className="object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-white leading-tight">
            About LabLustre
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mt-4">
            Pioneering the future of scientific research through innovation, precision, and collaboration.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="font-headline text-4xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground">
                    Our mission is to empower the scientific community with cutting-edge tools and services that accelerate discovery and improve lives. We strive to be a catalyst for innovation, providing the foundation upon which the next generation of scientific breakthroughs will be built.
                </p>
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Our History</h2>
            <p className="text-lg text-muted-foreground mt-2">A journey of innovation and growth.</p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 w-0.5 h-full bg-border -translate-x-1/2"></div>
            {historyEvents.map((item, index) => (
              <div key={index} className="relative flex items-center justify-between w-full mb-8">
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : 'order-3 text-left'}`}>
                  <p className="font-bold text-primary text-xl">{item.year}</p>
                  <p className="text-muted-foreground mt-1">{item.event}</p>
                </div>
                <div className="z-10 flex items-center justify-center w-8 h-8 bg-primary rounded-full ring-4 ring-background">
                  <Calendar className="h-4 w-4 text-primary-foreground" />
                </div>
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground mt-2">The brilliant minds behind LabLustre.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <Avatar className="w-32 h-32 mx-auto mb-4 ring-4 ring-primary/20">
                  <AvatarImage src={member.avatar} alt={member.name} data-ai-hint={member.aiHint} />
                  <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

        <section className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-4xl md:text-5xl font-bold">Our Core Values</h2>
                    <p className="text-lg text-muted-foreground mt-2">The principles that guide our work.</p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {values.map((value) => (
                        <Card key={value.title} className="text-center">
                            <CardHeader>
                                <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4">
                                    <value.icon className="h-8 w-8 text-primary" />
                                </div>
                                <CardTitle>{value.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{value.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    </div>
  );
}
