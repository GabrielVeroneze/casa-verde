import { Link } from 'react-router-dom'
import styles from './Menu.module.scss'
import logo from '@/assets/images/logo.svg'

const Menu = () => {
    return (
        <nav className={styles.navbar}>
            <img src={logo} alt="Logotipo da Casa Verde" />
            <ul className={styles.lista}>
                <li className={styles.item}>
                    <Link to="#">Como fazer</Link>
                </li>
                <li className={styles.item}>
                    <Link to="#">Ofertas</Link>
                </li>
                <li className={styles.item}>
                    <Link to="#">Depoimentos</Link>
                </li>
                <li className={styles.item}>
                    <Link to="#">Vídeos</Link>
                </li>
                <li className={styles.item}>
                    <Link to="#">Meu carrinho</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu
