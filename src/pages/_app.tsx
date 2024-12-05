import { Rubik } from 'next/font/google';

import '@/src/styles/global.css';

const rubic_font = Rubik({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function App({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) {
  return (
    <main className={rubic_font.className}>
      <Component {...pageProps} />
    </main>
  );
}
