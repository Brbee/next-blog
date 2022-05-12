import { readFile, readdir } from "fs/promises";
import { marked } from "marked";
//marked converts the .md file to html
import matter from "gray-matter";
// gray-matter converts the .md file into an object with 2 properties
// {data, content}
// where data is the metadata inside our md file
// where content is the other stuff we want to display

export async function getPost(slug) {
  const source = await readFile(`content/posts/${slug}.md`, "utf8");
  const {
    data: { date, title },
    content,
  } = matter(source);
  const body = marked(source);
  return {
    date,
    title,
    body,
  };
}

export async function getPosts() {
  const slugs = await getSlugs();
  const posts = [];
  for (const slug of slugs) {
    const post = await getPost(slug);
    posts.push({slug, ...post});
  }
  return posts;
}

export async function getSlugs() {
  const suffix = '.md';
  const files = await readdir('content/posts');
  // readdir allows us to read the names of files in a certain directory
  return files.filter(file => file.endsWith('.md')).map(file => file.slice(0, -suffix.length));
}
