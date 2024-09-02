import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import burgerMenu from '../../assets/images/burger-menu.svg'
import closeIcon from '../../assets/images/close-icon.svg'
import logo from '../../assets/images/logo.png'
import styles from './navbar.module.scss'

function Navbar() {
	const navigate = useNavigate()
	const [name, setName] = useState("")
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		setName(localStorage.getItem('admin-username'))
	}, [])

	function handleLogout() {
		localStorage.clear()
		navigate('/admin/login')
	}

	function handleMenu() {
		setIsOpen(!isOpen)
	}

	return (
		<header className={styles['header']}>
			<nav className={styles['navbar']}>
				<a className={styles['navbar__brand']} href="/">
					<img className={styles['navbar__brand-image']} src={logo} alt="logo" />
					<span>{name}</span>
				</a>

				<div onClick={handleMenu} className={styles['burger-menu']}>
					<img src={burgerMenu} alt="burger-menu" />
				</div>

				<ul className={styles['navbar__list']}>
					<li><NavLink to="/admin/dashboard">Barcha saytlar</NavLink></li>
					<li><NavLink to="/admin/create">Yangi sayt yaratish</NavLink></li>
					<li className={styles['navbar__list-item']}><button onClick={handleLogout} className={styles['item__button']}>Chiqish</button></li>
				</ul>

				<ul className={`${styles['navbar__list-visible']} ${isOpen ? styles['show'] : styles['hide']}`}>
					<div className={styles['visible__list']}>
						<li className={styles['navbar__list-item']}><NavLink to="/admin/dashboard">Barcha saytlar</NavLink></li>
						<li className={styles['navbar__list-item']}><NavLink to="/admin/create">Yangi sayt yaratish</NavLink></li>
						<li className={styles['navbar__list-item']}><button onClick={handleLogout} className={styles['item__button']}>Chiqish</button></li>
					</div>

					<div onClick={handleMenu} className={styles['visible__close']}>
						<img width='30px' src={closeIcon} alt="close-icon" />
					</div>
				</ul>
			</nav>
		</header>
	)
}

export default Navbar
