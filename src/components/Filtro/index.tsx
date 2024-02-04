import { useEffect, useState } from 'react'
import { useManipularProdutos } from '@/hooks/useManipularProdutos'
import { IFiltroPreco } from '@/interfaces/IFiltroPreco'
import InputReal from './InputReal'
import styles from './Filtro.module.scss'

const Filtro = () => {
    const { filtrarProduto } = useManipularProdutos()
    
    const [preco, setPreco] = useState<IFiltroPreco>({
        precoMinimo: '',
        precoMaximo: '',
    })

    useEffect(() => {
        filtrarProduto(preco)
    }, [preco])

    return (
        <div>
            <label className={styles.label}>Faixa de preço</label>
            <div className={styles.inputWrapper}>
                <InputReal
                    placeholder="De"
                    value={preco.precoMinimo}
                    onChange={evento =>
                        setPreco({
                            ...preco,
                            precoMinimo: evento.target.value,
                        })
                    }
                />
                <InputReal
                    placeholder="Até"
                    value={preco.precoMaximo}
                    onChange={evento =>
                        setPreco({
                            ...preco,
                            precoMaximo: evento.target.value,
                        })
                    }
                />
            </div>
        </div>
    )
}

export default Filtro
