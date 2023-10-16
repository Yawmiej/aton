import Link from 'next/link';
import { type ReactElement } from 'react';
import { Button, buttonVariants, cn } from 'ui';
import { Logo } from '@/components/Logo';

interface LandingLayoutProps {
  children: React.ReactNode;
}

export default function LandingLayout({
  children,
}: LandingLayoutProps): ReactElement {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="z-40 border-b-2">
        <div className="container mx-auto border-border">
          <div className="flex h-20 items-center justify-between py-6 px-2 w-full">
            <Link href="/">
              <Logo />
            </Link>
            <Button
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'text-primary'
              )}
            >
              Get Beta Access
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
