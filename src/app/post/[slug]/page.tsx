import { RenderMarkdown } from "@thonlabs/ui";
import styles from './styles.module.scss';

export const metadata = {
    title: 'Post Page',
    description: 'Tela de um post blog',
}

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
    return (
        <>
            <h1>{post.title}</h1>
            <div className={styles.container_markdown}>
                <RenderMarkdown value={post.body} />
            </div>
        </>
    )
}