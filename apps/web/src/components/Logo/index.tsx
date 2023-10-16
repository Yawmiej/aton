import Image from 'next/image';
import { type ReactElement } from 'react';

export function Logo(): ReactElement {
  return (
    <div className="">
      <Image alt="logo" height={30} src="/images/logo.svg" width={80} />
    </div>
  );
}
