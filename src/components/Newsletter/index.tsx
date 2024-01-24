import CampoTexto from './CampoTexto'
import styles from './Newsletter.module.scss'

const Newsletter = () => {
    return (
        <section className={styles.secao}>
            <h1 className={styles.titulo}>
                Sua casa com as <br />
                <strong>melhores plantas</strong>
            </h1>
            <p className={styles.texto}>
                Encontre aqui uma vasta seleção de plantas para decorar a sua
                casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre
                com seu e-mail e assine nossa newsletter para saber das
                novidades da marca.
            </p>
            <CampoTexto />
        </section>
    )
}

export default Newsletter
