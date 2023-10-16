import { cn } from '@/lib/utils';
import { type PropsWithChildren, type ReactElement } from 'react';

export function Container({
  children,
  className,
}: PropsWithChildren<{ className: string | string[] }>): ReactElement {
  return <div className={cn('container mx-auto', className)}>{children}</div>;
}
