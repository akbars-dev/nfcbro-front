import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import styles from './navbar.module.scss'

function Navbar() {
	const navigate = useNavigate()


	function handleLogout() {
		localStorage.clear()
		navigate('/admin/login')
	}

	return <header className={styles['header']}>
		<nav className={styles['navbar']}>
			<a className={styles['navbar__brand']} href="/">
				<img className={styles['navbar__brand-image']} src={logo} alt="" />
				<span>Akbarshox</span>
			</a>
			<ul className={styles['navbar__list']}>
				<li><NavLink to="/admin/dashboard">Barcha saytlar</NavLink></li>
				<li><NavLink to="/admin/create">Yangi sayt yaratish</NavLink></li>
				<li className={styles['navbar__list-item']}><button onClick={(e) => handleLogout()} className={styles['item__button']}>Chiqish</button></li>
			</ul>
		</nav>
	</header>
}


export default Navbar