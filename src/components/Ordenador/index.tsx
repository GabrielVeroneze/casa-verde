import { useState } from 'react'
import styles from './Ordenador.module.scss'

const Ordenador = () => {
    const [ordenar, setOrdenar] = useState<string>('relevantes')

    return (
        <div className={styles.ordenadorWrapper}>
            <p className={styles.texto}>Ordenar</p>
            <select
                className={styles.select}
                value={ordenar}
                onChange={(evento) => setOrdenar(evento.target.value)}
            >
                <option value="relevantes">Mais Relevantes</option>
                <option value="preco">Preço</option>
                <option value="nome">Nome</option>
            </select>
        </div>
    )
}

export default Ordenador
