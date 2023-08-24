'use client';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';

export default function Default() {
  const pathname = usePathname();
  const RecipeList = dynamic(() => import('./recipelist'), {
    ssr: false
  });
  return (
    <>
      <RecipeList className={
        pathname === '/recipe/'
          ? ''
          : 'hidden lg:block'
      } />
    </>
  );
}
