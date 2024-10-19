import Link from "next/link";
import { useRouter } from 'next/router';
import { useState } from 'react';


export default function FooterMinimal({ allTags }) {

  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

    // Handle form submission to the search page
    const handleSearchSubmit = (e) => {
      e.preventDefault();
      if (searchQuery.trim()) {
        // Redirect to the search results page with the query as a query parameter
        router.push(`/posts/search?query=${encodeURIComponent(searchQuery)}`);
      }
    };
  

  return (
    <footer  className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-3 mx-4">
        <form onSubmit={handleSearchSubmit}>
              <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-lg p-2 dark:bg-neutral-900">
                <div className="w-full">
                  <label className="sr-only">Search</label>
                  <input
                    type="text"
                    id="hero-input"
                    name="hero-input"
                    className="py-3 px-4 block w-full border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Search posts"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </form>
        </div>
      <div  className="py-6 border-t border-gray-200 dark:border-neutral-700">
        <div  className="flex flex-wrap justify-between items-center gap-2">
          <div>
            <p  className="text-xs text-gray-600 dark:text-neutral-400">
              ©2024 Christina Branson
            </p>
          </div>
    
          <ul  className="flex flex-wrap items-center">

          <li  className="inline-block pe-4 text-xs">
              <a  className="text-xs text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" href="#">
                About
              </a>
            </li>

            <li  className="inline-block pe-4 text-xs">
              <a  className="text-xs text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" href="#">
                Tags
              </a>
            </li>

            <li  className="inline-block pe-4 text-xs">
              <a  className="text-xs text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" href="#">
                Github
              </a>
            </li>

          </ul>
        </div>
      </div>
    </footer>
  );
}
