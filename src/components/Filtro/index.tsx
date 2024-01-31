import { useFiltrarProdutos } from '@/hooks/useFiltraProdutos'
import InputReal from './InputReal'
import styles from './Filtro.module.scss'

const Filtro = () => {
    const { preco, setPreco } = useFiltrarProdutos()

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
