import { remark } from "remark";
import html from "remark-html";
import { getAllPostIds, getPostData, getAllTags } from "../../lib/posts";
import Markdown from 'react-markdown';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Post({ postData, allTags }) {
  console.log({ postData });
  console.log({ allTags });
  return (
    <div className="max-w-[50rem] mx-auto px-4 sm:px-6 lg:px-8">
      <Header />
      <hr className="border-4"></hr>

      <article>
        <h1>{postData.title}</h1>
        <Markdown>{postData.content || ''}</Markdown>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <hr className="border-4"></hr>

      {/* FOOTER */}
      {/* <Footer allTags={allTags} /> */}
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

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  const allTags = getAllTags();

  const processedContent = await remark().use(html).process(postData.content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      postData: {
        ...postData,
        contentHtml,
        allTags,
      },
    },
  };
}
