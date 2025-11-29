import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { LanguageSwitcher } from '../language-switcher';
import { TranslatableText } from '../translatable-text';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <a href="#contact">
            <Button>
              <TranslatableText>Get a Quote</TranslatableText>
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
