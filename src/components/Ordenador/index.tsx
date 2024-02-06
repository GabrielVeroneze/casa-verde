import { useEffect, useState } from 'react'
import { useManipularProdutos } from '@/hooks/useManipularProdutos'
import styles from './Ordenador.module.scss'

const Ordenador = () => {
    const { ordenarProduto } = useManipularProdutos()

    const [ordenar, setOrdenar] = useState<string>('relevantes')

    useEffect(() => {
        ordenarProduto(ordenar)
    }, [ordenar])

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
