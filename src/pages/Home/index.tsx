import Menu from '@/components/Menu'
import Newsletter from '@/components/Newsletter'
import Produtos from '@/components/Produtos'
import styles from './Home.module.scss'

const Home = () => {
    return (
        <>
            <header className={styles.cabecalho}>
                <Menu />
                <Newsletter />
            </header>
            <main className={styles.principal}>
                <Produtos />
            </main>
        </>
    )
}

export default Home
