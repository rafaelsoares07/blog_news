import ArticlePost from "@/shared/components/article-post";

export const metadata = {
  title: 'Home Page',
  description: 'Tela inicial do blog',
}

const baseURL = 'https://www.tabnews.com.br/api/v1';
const postsEndPoint = '/contents/rafaelsreis'

async function getLastPost() {
  const response = await fetch(`${baseURL}${postsEndPoint}`);
  const posts = await response.json()
  const filter = posts.filter((post: any) => !!post.title)
  return filter;
}


export default async function Home() {

  const posts = await getLastPost();

  return (
    <>
      <h1>Blog</h1>
      {posts.map((item: any, i: any) => <ArticlePost key={i} title={item.title} details={item.updated_at} slug={item.slug} user={item.owner_username} tabcoins={item.tabcoins} />)}
    </>
  )
}
