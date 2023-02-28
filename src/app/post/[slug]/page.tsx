import { RenderMarkdown } from "@thonlabs/ui";
import { marked } from "marked";

interface PostProps {
    params: {
        slug: string
    }
}

const baseURL = 'https://www.tabnews.com.br/api/v1';
const postsEndPoint = '/contents/rafaelsreis'

async function getLastPost(slug: string) {
    const response = await fetch(`${baseURL}${postsEndPoint}/${slug}`);
    const posts = await response.json()
    return posts
}

export default async function Post({ params }: PostProps) {

    const post = await getLastPost(params.slug)
    console.log(post)
    const formatHTML = marked.parse(post.body)

    return (
        <>
            <h1>{post.title}</h1>
            <div>
                <RenderMarkdown value={post.body} />
            </div>
        </>
    )
}