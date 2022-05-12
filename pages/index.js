import Head from "next/head";
import Link from "next/link";
import { getPosts } from "../lib/posts";

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: { posts },
  };
}

function HomePage({ posts }) {
  return (
    <>
      <Head>
        <title>My blog</title>
      </Head>
      <main>
        <h1>My Blog</h1>
        <ul>
          {posts.map(post => (
            // In react whenever we have an array of elements we need to set the key on each element
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default HomePage;
