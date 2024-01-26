import { useState } from 'react'
import { useValidarEmail } from '@/hooks/useValidarEmail'
import styles from './CampoTexto.module.scss'

const CampoTexto = () => {
    const [emailUsuario, setEmailUsuario] = useState<string>('')

    const { erroEmail, validacao } = useValidarEmail()

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
            {erroEmail && (
                <span className={styles.mensagemErro}>{erroEmail}</span>
            )}
        </>
    )
}

export default CampoTexto
