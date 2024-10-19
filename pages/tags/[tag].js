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

      <hr className="border-4"></hr>

      <h1>{tag}</h1>

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

      <hr className="border-4"></hr>

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
