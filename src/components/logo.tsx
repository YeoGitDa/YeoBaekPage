import Link from 'next/link';
import { cn } from '@/lib/utils';

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/">
      <span className={cn("text-2xl font-headline font-bold text-primary", className)}>
        YB
      </span>
    </Link>
  );
};

export default Logo;
