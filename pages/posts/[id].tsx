import { getAllPostIds, getPostData } from '../../lib/posts';
import { remark } from 'remark';
import html from 'remark-html';

export default function Post({ postData }) {
  return (
    <article>
      <h1>{postData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
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

  const processedContent = await remark()
    .use(html)
    .process(postData.content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      postData: {
        ...postData,
        contentHtml,
      },
    },
  };
}
