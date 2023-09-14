import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import Link from 'next/link';

const notoSansJapanese = Noto_Sans_JP({
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Cookbook'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={'flex flex-col lg:h-screen min-h-screen ' + notoSansJapanese.className}>
        <header className="sticky top-0 text-black bg-white border-b border-gray-300">
          <div className="p-4 mx-auto w-full max-w-7xl">
            <div className="flex item-center text-slate-500">
              <Link className="my-auto mr-8 text-2xl text-black" href="/">Cookbook</Link>
              <Link className="my-auto mr-4 text-lg text-black" href="/recipe/">レシピ</Link>
            </div>
          </div>
        </header>
        <main className="lg:overflow-auto text-black bg-white flex-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
