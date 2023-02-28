import styles from './styles.module.scss'
export default function MainFooter() {
    return (
        <footer className={styles.container}>
            <div>
                <p className={styles.name}>Rafa!</p>
                <p className={styles.email}>rafaelsgabriel9@gmail.com</p>
            </div>
        </footer>
    )
}