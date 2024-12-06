import { NextSeo } from 'next-seo';
import { getSortedPostsData, getAllTags } from '../lib/posts';

import Footer from '@/src/components/Footer';
import Header from '@/src/components/Header';
import PostListingPaginated from '@/src/components/PostListingPaginated';
export default function Home({
  allPostsData,
  allTags,
}: {
  allPostsData: any;
  allTags: any;
}) {
  return (
    <div className="max-w-[64rem] mx-auto px-4 sm:px-6 lg:px-8">
      <Header />
      <NextSeo
        title={'Deep Track AI'}
      />

      <div className="w-full py-3">
        <div className="grid lg:grid-cols-1 lg:gap-y-16 gap-8">
          <PostListingPaginated posts={allPostsData} postsPerPage={10} />
        </div>
      </div>

      <hr className="border-1 border-gray-200 dark:border-neutral-700"></hr>

      {/* FOOTER */}
      <Footer allTags={allTags} />
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
