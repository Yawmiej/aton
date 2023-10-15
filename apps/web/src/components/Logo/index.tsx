import Image from 'next/image';
import { type ReactElement } from 'react';

export function Logo(): ReactElement {
  return (
    <div>
      <Image alt="logo" src="/images/logo.svg" />
    </div>
  );
}
