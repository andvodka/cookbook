import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'レシピ'
};

export default async function Layout({
  children,
  left
}: {
  children: React.ReactNode,
  left: React.ReactNode
}) {
  return (
    <div className="overflow-auto lg:overflow-hidden relative h-full">
      <div className="lg:overflow-auto lg:absolute lg:inset-0 lg:w-[16rem] lg:mx-auto max-w-lg mx-auto lg:translate-x-[-24rem]">
        {left}
      </div>
      <div className="lg:overflow-auto lg:h-full">
        <div className="w-full max-w-lg mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
