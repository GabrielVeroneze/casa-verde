import { useState } from 'react'
import styles from './CampoTexto.module.scss'

const CampoTexto = () => {
    const [emailUsuario, setEmailUsuario] = useState<string>('')

    return (
        <>
            <form
                className={styles.campo}
            >
                <input
                    className={styles.input}
                    placeholder="Insira seu e-mail"
                    value={emailUsuario}
                    onChange={evento => setEmailUsuario(evento.target.value)}
                />
                <button type="submit" className={styles.botao}>
                    Assinar newsletter
                </button>
            </form>
        </>
    )
}

export default CampoTexto
