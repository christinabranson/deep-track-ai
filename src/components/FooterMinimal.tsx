import { useRouter } from 'next/router';
import { useState } from 'react';

export default function FooterMinimal({ allTags }: { allTags: any }) {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  // Handle form submission to the search page
  const handleSearchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Redirect to the search results page with the query as a query parameter
      await router.push(`/posts/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <footer className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="my-10 sm:my-14">
        <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
          Search
        </h2>

        <form onSubmit={handleSearchSubmit}>
          <div className="p-1.5 flex flex-col sm:flex-row items-center gap-2 border border-gray-200 rounded-lg dark:border-neutral-700">
            <div className="relative w-full">
              <label className="sr-only">Search</label>
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3">
                <svg
                  className="shrink-0 size-4 text-gray-400 dark:text-white/60"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </div>
              <input
                type="text"
                id="hero-input"
                name="hero-input"
                className="py-2 ps-9 pe-3 text-gray block w-full border-transparent rounded-lg text-sm focus:border-transparent focus:ring-transparent disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500"
                placeholder="Search posts"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div
                data-lastpass-icon-root=""
                style={{
                  position: 'relative',
                  height: '0px !important',
                  width: '0px !important',
                }}
              ></div>
            </div>
            <a
              className="w-full sm:w-auto whitespace-nowrap py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-md border border-transparent bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800 dark:hover:bg-neutral-200"
              href="#"
            >
              Search
              <svg
                className="shrink-0 size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </form>
      </div>

      <div className="my-10 sm:my-14">
        <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
          Popular tags
        </h2>

        <div className="flex flex-wrap items-center gap-5">
          {allTags.map((tag: any) => (
            <a
              className="inline-flex items-center p-2 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              href={'/deep-track-ai/tags/' + tag}
            >
              {tag}
            </a>
          ))}
        </div>
      </div>

      <div className="py-6 border-t border-gray-200 dark:border-neutral-700">
        <div className="flex flex-wrap justify-between items-center gap-2">
          <div>
            <p className="text-xs text-gray-600 dark:text-neutral-400">
              ©2024 Christina Branson
            </p>
          </div>

          <ul className="flex flex-wrap items-center">
            <li className="inline-block pe-4 text-xs">
              <a
                className="text-xs text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
                href="/deep-track-ai/about/"
              >
                About
              </a>
            </li>

            <li className="inline-block pe-4 text-xs">
              <a
                className="text-xs text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
                href="/deep-track-ai/tags/all"
              >
                Tags
              </a>
            </li>

            <li className="inline-block pe-4 text-xs">
              <a
                className="text-xs text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
                href="https://github.com/christinabranson/deep-track-ai"
                target="_blank"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
