import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSortedPostsData, getAllTags } from '../../lib/posts';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PostListingSingle from '@/components/PostListingSingle';

export default function SearchResults({ allPostsData, allTags }) {
  const router = useRouter();
  const { query } = router.query;
  const [filteredPosts, setFilteredPosts] = useState([]);

  // Search posts by title, tags, and body
  function searchPosts(allPostsData, query) {
    return allPostsData.filter((post) => {
      const content =
        `${post.title} ${post.tags?.join(' ')} ${post.content}`.toLowerCase();
      return content.includes(query.toLowerCase());
    });
  }

  useEffect(() => {
    if (query) {
      // Use the client-side search function to filter posts based on the query
      const searchResults = searchPosts(allPostsData, query);
      setFilteredPosts(searchResults);
    }
  }, [query, allPostsData]);

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
          Search: {query}
        </li>
      </ol>
      {/* /Breadcrumbs */}

      <div className="w-full py-3">
        <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-8">
          {/* Display filtered posts */}
          {filteredPosts.length > 0 ? (
            <>
              {filteredPosts.map((post) => (
                <PostListingSingle post={post} />
              ))}
            </>
          ) : (
            <p>No posts found for the search term "{query}".</p>
          )}
        </div>
      </div>

      <hr className="border-1 border-gray-200 dark:border-neutral-700"></hr>

      {/* FOOTER */}
      <Footer allTags={allTags} />
    </div>
  );
}

// Fetch posts statically for client-side search functionality
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const allTags = getAllTags();
  return {
    props: {
      allPostsData,
      allTags,
    },
  };
}
