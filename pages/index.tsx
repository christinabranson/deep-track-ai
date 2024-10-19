// import { useState } from "react";
import Link from "next/link";
import { getSortedPostsData, getAllTags } from "../lib/posts";

import { useState, useEffect } from "react";

export default function Home({ allPostsData, allTags }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(allPostsData);

  // Search posts by title, tags, and body
  function searchPosts(query) {
    return allPostsData.filter((post) => {
      const content =
        `${post.title} ${post.tags?.join(" ")} ${post.content}`.toLowerCase();
      return content.includes(query.toLowerCase());
    });
  }

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.length > 0) {
      setFilteredPosts(searchPosts(query));
    } else {
      setFilteredPosts(allPostsData);
    }
  };

  const getImageUrl = (image) => {
    if (image !== undefined) {
      return image;
    }

    return "/img/music.jpg";
  };

  return (
    <div className="max-w-[50rem] mx-auto px-4 sm:px-6 lg:px-8">
      {/* HEADER */}
      <div className="max-w-[50rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div>
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark: ">
              Deep Track <span className="text-blue-custom">AI</span>
            </h1>
            <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
              Discovering new music with generative AI
            </p>
          </div>

          <div className="relative ms-4">
            <img
              className="w-full rounded-md"
              src="/img/logo1.png"
              alt="Hero Image"
            />
          </div>
        </div>
      </div>

      {/* LIST POSTS */}
      <hr className="border-4"></hr>

      <div
        className="w-full"
        style={{ marginTop: "50px", marginBottom: "50px" }}
      >
        <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-8">
          {filteredPosts.map(({ id, title, tagline, date, image }) => (
            <Link
              className="group block rounded-xl overflow-hidden focus:outline-none"
              id={id}
              key={id}
              href={`/posts/${id}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                  <img
                    className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                    src={getImageUrl(image)}
                    alt={title}
                  />
                </div>

                <div className="grow">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover: ">
                    {title}
                  </h3>
                  <p className="mt-3 text-gray-600 dark:text-neutral-400">
                    {title}
                  </p>
                  <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
                    Read more
                    <svg
                      className="shrink-0 size-4"
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
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* FOOTER */}

      <footer className="mt-auto w-full ">
        <div className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <div className="col-span-full lg:col-span-1">
              <a
                className="flex-none text-xl font-semibold  focus:outline-none focus:opacity-80"
                href="#"
                aria-label="Brand"
              >
                Deep Track AI
              </a>
            </div>

            <div className="col-span-1">
              <h4 className="font-semibold ">About</h4>

              <div className="mt-3 grid space-y-3">
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    About Me
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Tags
                  </a>
                </p>
                <p></p>
              </div>
            </div>

            <div className="col-span-3">
              <h4 className="font-semibold ">Search</h4>

              <form>
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
                      onChange={handleSearch}
                    />
                  </div>
                </div>
              </form>

              <div>
                <h4 className="font-semibold ">Popular tags:</h4>
                <p>
                  {allTags.map((tag) => (
                    <span key={tag}>
                      <Link href={`/tags/${tag}`}>{tag}</Link>{'   '}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
            <div className="flex justify-between items-center">
              <p className="text-sm ">© 2024 Christina Branson</p>
            </div>

            <div>
              <a
                className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent   hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
                title="View on Github"
              >
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

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
