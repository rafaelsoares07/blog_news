import Image from 'next/image';
import styles from './styles.module.scss';

interface ArticlePostProps {
    title: string;
    details: string;
    slug: string;
    user: string;
    tabcoins: number;
}

export default function ArticlePost({ title, details, slug, user, tabcoins }: ArticlePostProps) {
    return (
        <a href={`post/${slug}`}>
            <article className={styles.container}>
                <div className={styles.header_text}>
                    <p className={styles.sec_text}>{details.substring(0, 10)} - {user}</p>
                    <div className={styles.content_tabcoin}>
                        <Image alt="default" width={16} height={16} src="/estrela.png" />
                        <p className={styles.tabcoin}>{tabcoins}</p>
                    </div>
                </div>


                <p className={styles.main_text}>{title}</p>
            </article>
        </a>
    )
}