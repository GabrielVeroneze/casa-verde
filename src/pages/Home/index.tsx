import Menu from '@/components/Menu'
import Newsletter from '@/components/Newsletter'
import styles from './Home.module.scss'

const Home = () => {
    return (
        <>
            <header className={styles.cabecalho}>
                <Menu />
                <Newsletter />
            </header>
        </>
    )
}

export default Home
