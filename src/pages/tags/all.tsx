import Link from 'next/link';
import { getAllTagsWithCounts } from '../../lib/posts';

import Footer from '@/src/components/Footer';
import Header from '@/src/components/Header';

export default function AllTagsPage({ allTags }: { allTags: any }) {
  return (
    <div className="max-w-[64rem] mx-auto px-4 sm:px-6 lg:px-8">
      <Header />

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
          Tags
        </li>
      </ol>
      {/* /Breadcrumbs */}

      <div className="w-full py-3">
        <h2 className="text-3xl dark:text-white font-semibold py-2">
          Popular tags:
        </h2>
        <ul className="max-w flex flex-col py-2">
          {allTags.map(([tag, count]: [string, number]) => (
            <li
              key={tag}
              className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray  text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-white"
            >
              <div className="flex justify-between w-full">
                <Link href={`/tags/${tag}`}>{tag}</Link>
                <span className="inline-flex items-center py-1 px-2 rounded-full text-xs font-medium bg-blue text-white">
                  {count}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <hr className="border-1 border-gray-200 dark:border-neutral-700"></hr>

      {/* FOOTER */}
      <Footer allTags={allTags} />
    </div>
  );
}

export async function getStaticProps() {
  const allTags = getAllTagsWithCounts();
  return {
    props: {
      allTags,
    },
  };
}
