import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { remark } from 'remark';
import html from 'remark-html';
import { getAllPostIds, getAllTags, getPostData } from '../../lib/posts';
import { formatDate } from '../../lib/util';
import CustomMarkdown from '@/src/components/CustomMarkdown';
import Footer from '@/src/components/Footer';
import Header from '@/src/components/Header';
import SpotifyEmbed from '@/src/components/SpotifyEmbed';
export default function Post({
  postData,
  allTags,
}: {
  postData: any;
  allTags: any;
}) {
  return (
    <div className="max-w-[64rem] mx-auto px-4 sm:px-6 lg:px-8">
      <Header />
      <NextSeo
        title={`Deep Track AI: ${postData.title}`}
        description={postData.tagline}
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
          {postData.title}
        </li>
      </ol>
      {/* /Breadcrumbs */}

      <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid lg:grid-cols-2 gap-y-8 lg:gap-y-0 lg:gap-x-6">
          <article className="lg:col-span-2 py-3">
            <h2 className="text-3xl font-bold lg:text-5xl dark:text-white font-bold py-2">
              {postData.title}
            </h2>

            <div className="flex flex-wrap items-center gap-2 py-4">
              <p className="text-xs sm:text-sm text-gray-800 dark:text-neutral-200">
                {formatDate(postData.date)}
              </p>
              {postData.tags.map((tag: any) => (
                <a
                  className="inline-flex items-center p-2 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  href={'/deep-track-ai/tags/' + tag}
                >
                  {tag}
                </a>
              ))}
            </div>

            <SpotifyEmbed link={postData.playlist} />

            <CustomMarkdown content={postData.content || ''} />

            {postData.image && (
              <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <figure>
                  <img
                    className="mx-auto object-cover rounded-xl"
                    src={postData.image}
                    alt={postData.image_caption || postData.titler}
                  />
                  {postData.image_caption && (
                    <figcaption className="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500">
                      {postData.image_caption}
                    </figcaption>
                  )}
                </figure>
              </div>
            )}

          </article>
        </div>
      </div>
      <hr className="border-1 border-gray-200 dark:border-neutral-700"></hr>

      {/* FOOTER */}
      <Footer allTags={allTags} />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: any }) {
  const postData = getPostData(params.id);
  const allTags = getAllTags();

  const processedContent = await remark().use(html).process(postData.content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      postData: {
        ...postData,
        contentHtml,
      },
      allTags,
    },
  };
}
