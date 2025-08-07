import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { TestTube, Dna, Microscope, Beaker, FlaskConical, Rocket } from "lucide-react";

// 랜덤 아이콘 리스트 (예시: 토스의 3D 일러스트를 대체)
const icons = [
  { icon: TestTube, style: "top-24 left-32" },
  { icon: Dna, style: "top-10 right-64" },
  { icon: Microscope, style: "bottom-32 left-12" },
  { icon: Beaker, style: "bottom-24 right-24" },
  { icon: FlaskConical, style: "top-1/2 left-10" },
  { icon: Rocket, style: "bottom-12 right-44" },
];

export default function Home() {
  return (
    <>
      <section className="relative h-[calc(100vh-64px)] min-h-[600px] w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#eaf4fb] to-[#fafdff] overflow-hidden">
        {/* 배경 3D 아이콘/일러스트 */}
        {icons.map(({ icon: Icon, style }, i) => (
          <div
            key={i}
            className={`absolute z-0 ${style} opacity-80 drop-shadow-xl`}
            style={{ filter: "blur(0.5px)" }}
          >
            <Icon className="w-20 h-20 text-blue-200" />
          </div>
        ))}
        {/* 중앙 텍스트 */}
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-neutral-900 text-center leading-tight mb-6">
            문헌정보학의 실험실, <br className="hidden md:block" />
            <span className="text-blue-500">여백</span>
          </h1>
          <p className="text-lg md:text-2xl text-neutral-600 font-sans mb-8 text-center max-w-2xl">
            질문을 탐구하고, 지식의 여백을 채워가는 실험실.<br />
            정보, 기술, 그리고 혁신이 만나는 곳에서 여러분을 기다립니다.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="font-bold text-base rounded-xl shadow-md">
              <Link href="/lab">실험실 둘러보기</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="font-bold text-base rounded-xl shadow-md">
              <Link href="/services">서비스 안내</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
