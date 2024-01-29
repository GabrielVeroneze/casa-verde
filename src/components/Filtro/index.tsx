import { useState } from 'react'
import InputReal from './InputReal'
import styles from './Filtro.module.scss'

const Filtro = () => {
    const [precoMinimo, setPrecoMinimo] = useState<string>('')
    const [precoMaximo, setPrecoMaximo] = useState<string>('')

    return (
        <div>
            <label className={styles.label}>Faixa de preço</label>
            <div className={styles.inputWrapper}>
                <InputReal
                    placeholder="De"
                    value={precoMinimo}
                    onChange={evento => setPrecoMinimo(evento.target.value)}
                />
                <InputReal
                    placeholder="Até"
                    value={precoMaximo}
                    onChange={evento => setPrecoMaximo(evento.target.value)}
                />
            </div>
        </div>
    )
}

export default Filtro
