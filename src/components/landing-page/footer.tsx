import { Logo } from '@/components/ui/logo';
import { TranslatableText } from '../translatable-text';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-card">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <Logo />
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} <TranslatableText>Digital Disha. All rights reserved.</TranslatableText>
        </p>
      </div>
    </footer>
  );
}
