import styles from './CardProduto.module.scss'

interface CardProdutoProps {
    name: string
    preco: number
    img: string
    ordem: number
}

const CardProduto = ({ name, preco, img, ordem }: CardProdutoProps) => {
    return (
        <div
            className={styles.card}
            style={{
                backgroundImage: `url('images/produtos/${img}.png')`,
                order: ordem,
            }}
        >
            <div className={styles.conteudo}>
                <h3 className={styles.titulo}>{name}</h3>
                <p className={styles.preco}>R$ {preco.toFixed(2)}</p>
                <button className={styles.botao}>Comprar</button>
            </div>
        </div>
    )
}

export default CardProduto
