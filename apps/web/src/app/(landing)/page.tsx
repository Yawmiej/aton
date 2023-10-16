import Image from 'next/image';
import Link from 'next/link';
import { type ReactElement } from 'react';
import { Container, buttonVariants } from 'ui';

export default function IndexPage(): ReactElement {
  return (
    <div className="h-[calc(100vh)] overflow-y-hidden">
      <section>
        <Container className="container">
          <div className="py-10 md:py-20">
            <div className="flex justify-between gap-2 md:gap-20 flex-col md:flex-row">
              <div className="">
                <h1 className="mt-10 max-w-[540px] scroll-m-20 pb-2 text-3xl md:text-5xl leading-tight md:leading-normal font-semibold tracking-tighter transition-colors first:mt-0">
                  The AI Powered collaborative workspace for Product teams
                </h1>
              </div>
              <div className="w-full md:max-w-[360px]">
                <p className="mb-4 text-muted-foreground">
                  Translate your thoughts, sketches and product documentations
                  to hi-fidelity designs and reusable code in minutes.
                </p>
                <Link
                  href="https://tally.so/r/nWRllL"
                  className={buttonVariants({ size: 'xl' })}
                >
                  Get Beta Access
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section
        className="bg-no-repeat bg-cover"
        style={{
          backgroundImage: 'url(/images/bg-pattern.png)',
        }}
      >
        <div className="container pt-16">
          <div className="flex justify-center align-center">
            <Image
              alt="dashboard"
              height={741.12}
              src="/images/aton-studio.png"
              width={1234}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
