import { Rubik } from 'next/font/google';
import { DefaultSeo } from 'next-seo';

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
      <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'en_US',
            url: 'https://christinabranson.github.io/deep-track-ai/',
            siteName: 'Deep Track AI',
            description: 'Discovering new music with generative AI',
          }}
        />
      <Component {...pageProps} />
    </main>
  );
}
