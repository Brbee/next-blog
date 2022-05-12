import Head from "next/head";
import { getPost, getSlugs } from "../../lib/posts";

// another nextjs function
export async function getStaticPaths() {
  const slugs = await getSlugs();
  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
    // fallback property if false will not do anything if the url isn't valid and will give us a 404 page
  };
}

// this is a function that belongs to nextjs and is only called on the server in development mode. You can check by console.log something inside of it
export async function getStaticProps({ params: { slug } }) {
  const post = await getPost(slug);
  return {
    props: {
      post,
    },
  };
}

function PostPage({ post }) {
  return (
    <>
      <Head>
        <title>{post.title} - My blog</title>
      </Head>
      <main>
        <p>{post.date}</p>
        <h1>{post.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: post.body }} />
      </main>
    </>
  );
}

export default PostPage;
