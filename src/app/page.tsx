import ArticlePost from "@/shared/components/article-post";

const baseURL = 'https://www.tabnews.com.br/api/v1';
const postsEndPoint = '/contents/rafaelsreis'

async function getLastPost() {
  const response = await fetch(`${baseURL}${postsEndPoint}`);
  const posts = await response.json()
  const filter = posts.filter(post => !!post.title)
  return filter;
}


export default async function Home() {

  const posts = await getLastPost();
  // console.log(posts)

  return (
    <>
      <h1>Blog</h1>
      {posts.map((item, i) => <ArticlePost key={i} title={item.title} details={item.updated_at} slug={item.slug} user={item.owner_username} tabcoins={item.tabcoins} />)}
    </>
  )
}
