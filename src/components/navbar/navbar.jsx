import logo from '../../assets/images/logo.png'
import styles from './navbar.module.scss'


function Navbar() {
	return <header className={styles['header']}>
		<nav className={styles['navbar']}>
			<a className={styles['navbar__brand']} href="/">
				<img className={styles['navbar__brand-image']} src={logo} alt="" />
				<span>Akbarshox</span>
			</a>
			<ul className={styles['navbar__list']}>
				<li><a href="/">Barcha saytlar</a></li>
				<li><a href="/">Yangi sayt yaratish</a></li>
				<li className={styles['navbar__list-item']}><button className={styles['item__button']}>Chiqish</button></li>
			</ul>
		</nav>
	</header>
}


export default Navbar