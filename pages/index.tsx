import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';

export default function Home({ allPostsData }) {

  const renderImage = (title, image) => {
    if (image !== undefined) {
      return (<img className="w-full h-auto rounded-t-xl" src={image} alt={title} />)
    }

    return (<img className="w-full h-auto rounded-t-xl" src="/img/music.jpg" alt={title} />) 
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl dark:text-white">Blog</h1>




        {allPostsData.map(({ id, title, tagline, date, image }) => (

<div id={id} className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
{renderImage(title,image)}
<div className="p-4 md:p-5">
  <h3 className="text-lg font-bold text-gray-800 dark:text-white">
  {title}
  </h3>
  <p className="mt-1 text-gray-500 dark:text-neutral-400">
    {date} 
  </p>
  <p className="mt-1 text-gray-500 dark:text-neutral-400">
    {tagline} 
  </p>
  <Link className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href={`/posts/${id}`}>
    Read more...
  </Link>
</div>
</div>


        ))}

    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

{/* <li key={id}>
<Link href={`/posts/${id}`}>
  {title}
</Link>
<br />
<small>{date}</small>
</li> */}