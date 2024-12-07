import Link from 'next/link';
import { formatDate } from '../lib/util';

export default function PostListingSingle({ post }: { post: any }) {
  const { id, title, tagline, date, image } = post;

  const getImageUrl = () => {
    if (image !== undefined) {
      return image;
    }

    return '/deep-track-ai/music.jpg';
  };
  return (
    <Link
      className="group border block rounded-xl overflow-hidden focus:outline-none my-5 min-w-100"
      id={id}
      key={id}
      href={`/posts/${id}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 h-full min-h-64">
        <div className="shrink-0 relative overflow-hidden w-full sm:w-96 h-full min-h-64">
          <img
            className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover "
            src={getImageUrl()}
            alt={title}
          />
        </div>

        <div className="grow px-2">
          <h3 className="py-2 text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover ">
            {title}
          </h3>

          <p className="mt-2  text-sm text-gray-600 dark:text-neutral-400">
            {formatDate(date)}
          </p>
          <p className="mt-3 text-gray-600 dark:text-neutral-400">{tagline}</p>
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
          {/* <div className="flex flex-wrap items-center gap-2 py-4">
            {tags.map((tag: any) => (
              <span className="inline-flex items-center p-2 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                {tag}
              </span>
            ))}
          </div> */}
        </div>
      </div>
    </Link>
  );
}
