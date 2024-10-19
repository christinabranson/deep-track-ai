import { getAllTags, getPostsByTag } from "../../lib/posts";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostListing from "@/components/PostListing";

export default function Tag({ tag, posts, allTags }) {
  console.log({ posts });
  console.log({ allTags });
  return (
    <div className="max-w-[50rem] mx-auto px-4 sm:px-6 lg:px-8">
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
        <li className="inline-flex items-center">
          <Link
            className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
            href="/tags/all"
          >
            Tags
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
          </Link>
        </li>
        <li
          className="inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-neutral-200"
          aria-current="page"
        >
          {tag}
        </li>
      </ol>
      {/* /Breadcrumbs */}

      <div
        className="w-full"
        style={{ marginTop: "50px", marginBottom: "50px" }}
      >
        <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-8">
          {posts.map((post) => (
            <PostListing post={post} />
          ))}
        </div>
      </div>

      <hr className="border-1 border-gray-200 dark:border-neutral-700"></hr>

      {/* FOOTER */}
      <Footer allTags={allTags} />
    </div>
  );
}

export async function getStaticPaths() {
  const allTags = getAllTags();
  const paths = allTags.map((tag) => ({
    params: { tag },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const posts = getPostsByTag(params.tag);
  const allTags = getAllTags();
  return {
    props: {
      tag: params.tag,
      posts,
      allTags,
    },
  };
}
