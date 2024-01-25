import styles from './CampoTexto.module.scss'

const CampoTexto = () => {
    return (
        <form className={styles.campo}>
            <input
                className={styles.input}
                type="email"
                placeholder="Insira seu e-mail"
            />
            <button type="submit" className={styles.botao}>
                Assinar newsletter
            </button>
        </form>
    )
}

export default CampoTexto
