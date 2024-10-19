import { getAllTags, getPostsByTag } from "../../lib/posts";
import Link from "next/link";

export default function Tag({ tag, posts }) {
  return (
    <div>
      <h1>Posts tagged with "{tag}"</h1>
      <ul>
        {posts.map(({ id, title, date, tags }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small>{date}</small>
            <br />
            <small>Tags: {tags.join(", ")}</small>
          </li>
        ))}
      </ul>
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
  return {
    props: {
      tag: params.tag,
      posts,
    },
  };
}
