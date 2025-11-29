import Link from 'next/link';
import { cn } from '@/lib/utils';
import { TranslatableText } from '../translatable-text';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn('group', className)}>
      <h1 className="font-headline text-2xl font-extrabold tracking-wide text-white transition-colors group-hover:text-primary">
        Digital<span className="text-primary transition-colors group-hover:text-white">Disha</span>
      </h1>
    </Link>
  );
}
