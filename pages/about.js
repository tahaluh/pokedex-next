import Image from "next/image"
import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>Esse projeto foi desenvolvido como objeto de estudo da framework Next.Js, onde o autor Thauã Magalhães, estudou e aplicou conceitos de rotas estáticas e dinâmicas por meio da framework a fim de desenvolver esta aplicação.</p>
            <p>O canal &quot;Hora de codar&quot; foi utilizado como base de estudo.</p>
            <Image src="/images/mrmime.png" width="300" height="300" alt="Mr. Mime"/>
        </div>
    )
}