import { SignIn } from '@clerk/nextjs';
import { type ReactElement } from 'react';

function Page(): ReactElement {
  return <SignIn />;
}

export default Page;
