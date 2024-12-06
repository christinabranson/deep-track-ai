import Link from 'next/link';
import { getAllTags } from '../lib/posts';

import CustomMarkdown from '@/src/components/CustomMarkdown';
import Footer from '@/src/components/Footer';
import Header from '@/src/components/Header';
import { NextSeo } from 'next-seo';
export default function AllTagsPage({ allTags }: { allTags: any }) {
  const markdownContent = `

-----

## 👋 Hi, I'm Christina!

---

### Why this blog?

I started this blog to merge two of my passions: music discovery and cutting-edge technology. Music has always been a powerful force in my life—a way to connect, escape, and explore. At the same time, my fascination with artificial intelligence has opened my eyes to its potential to uncover hidden gems and patterns that might go unnoticed.

With Deep Track AI, my goal is to harness the power of generative AI to surface new and underappreciated music, create connections between artists and genres, and introduce you to tracks that resonate deeply. Whether it’s uncovering an indie artist from halfway across the world or drawing parallels between your favorite band and a lesser-known pioneer, I want this blog to inspire a new way of exploring music.

---

### About the tech

This blog uses Next.js & is deployed to Github Pages!

I'm using ChatGPT as my Generative AI tool, though I'm open to exploring different tooling!


`;
  return (
    <div className="max-w-[64rem] mx-auto px-4 sm:px-6 lg:px-8">
      <Header />
      <NextSeo
        title={`Deep Track AI: About}`}
        description={`Why I started this blog & the tech behind it`}
      />
      {/* Breadcrumbs */}
      <ol className="flex items-center whitespace-nowrap p-2 border-y border-gray-200 dark:border-neutral-700">
        <li className="inline-flex items-center">
          <Link
            className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
            href="/"
          >
            Home
          </Link>
          <svg
            className="shrink-0 size-5 text-gray-400 dark:text-neutral-600 mx-2"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M6 13L10 3"
              stroke="currentColor"
              stroke-linecap="round"
            ></path>
          </svg>
        </li>

        <li
          className="inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-neutral-200"
          aria-current="page"
        >
          About
        </li>
      </ol>
      {/* /Breadcrumbs */}

      <div className="w-full py-5">
        <h2 className="text-3xl dark:text-white font-bold py-2">
          About this blog
        </h2>

        <CustomMarkdown content={markdownContent} />
      </div>

      <hr className="border-1 border-gray-200 dark:border-neutral-700"></hr>

      {/* FOOTER */}
      <Footer allTags={allTags} />
    </div>
  );
}

export async function getStaticProps() {
  const allTags = getAllTags();
  return {
    props: {
      allTags,
    },
  };
}
