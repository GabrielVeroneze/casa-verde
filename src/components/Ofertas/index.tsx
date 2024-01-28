import { v4 as uuidv4 } from 'uuid'
import { useBuscarProdutos } from '@/hooks/useBuscarProdutos'
import CardProduto from '@/components/CardProduto'
import styles from './Ofertas.module.scss'

const Ofertas = () => {
    const { produtos } = useBuscarProdutos()

    return (
        <section>
            <h2 className={styles.titulo}>
                Conheça nossas <br />
                <strong>ofertas</strong>
            </h2>
            <div className={styles.produtos}>
                {produtos.map(produto => (
                    <CardProduto key={uuidv4()} {...produto} />
                ))}
            </div>
        </section>
    )
}

export default Ofertas
