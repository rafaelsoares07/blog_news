import Image from 'next/image'
import styles from './styles.module.scss'
export default function MainHeader() {
  return (
    <header className={styles.container}>


      <div className={styles.content}>
        <a href='/' className={styles.arrow_back}>Voltar</a>

        <p className={styles.text_code}> {`// Fazer o que ama é diversão! _`}   </p>

        <div className={styles.content_img}>
          <Image width={100} height={100} src='/avatar.jpeg' alt='Foto do criador do blog' />
          <div>
            <h3>Rafael Soares</h3>
            <p>Desenvolvedor Full-Stack</p>
          </div>
        </div>

        <p className={styles.display_none}>Olá, meu nome é Rafael Soares Gabriel e atualmente moro em Natal, Rio Grande do Norte. Sou um desenvolvedor Fullstack em busca da minha primeira oportunidade de emprego na área. </p>
        <p className={styles.display_none}>Tenho paixão por tecnologia e sou constantemente aprendendo coisa novas que irei compartilhar aqui!</p>
      </div>
    </header>
  )
}