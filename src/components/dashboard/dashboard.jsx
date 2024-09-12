import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import searchIcon from '../../assets/images/search.svg'
import api from '../../http/api'
import styles from './dashboard.module.scss'

function Dashboard() {
	const [pages, setPages] = useState([])
	const [searchQuery, setSearchQuery] = useState('')
	const [loading, setLoading] = useState(true) // Add loading state
	const navigate = useNavigate()

	async function handleDelete(id) {
		await api.deletePage(id)
		navigate('/admin/dashboard')
	}

	function handleEdit(id) {
		navigate(`/admin/update/${id}`)
	}

	async function fetchData() {
		try {
			const data = await api.allPages()
			setPages(data.data)
		} catch (error) {
			console.error("Failed to fetch pages", error)
		} finally {
			setLoading(false) // Set loading to false once data is fetched
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	function handleSearchChange(event) {
		setSearchQuery(event.target.value)
	}

	const filteredPages = pages.filter(page =>
		page.username.toLowerCase().includes(searchQuery.toLowerCase())
	)

	return (
		<section className={styles['dashboard']}>
			<h1 className={styles['dashboard-title']}>Barcha veb saytlar</h1>

			<div className={styles['dashboard-search']}>
				<input
					className={styles['dashboard-inp']}
					type="text"
					placeholder='Username orqali qidiring'
					value={searchQuery}
					onChange={handleSearchChange}
				/>
				<button className={styles['dashboard-icon']}><img width={'20px'} src={searchIcon} alt="Search Icon" /></button>
			</div>

			{loading ? (
				<p>Web saytlar yuklanmoqda...</p> // Display loading text
			) : (
				<div className={styles['dashboard__cards']}>
					{filteredPages.length > 0 ? (
						filteredPages.map((page, index) => (
							<div key={index} className={styles['dashboard__cards-item']}>
								<span className={styles["item__title"]}>{page.name}</span>
								<span className={styles['item__username']}><b>Username:</b> {page.username}</span>

								<button className={styles["item__btn"]} onClick={() => handleDelete(page.id)}>O'chirish</button>
								<button className={styles["item__btn"]} onClick={() => handleEdit(page.username)}>Tahrirlash</button>
							</div>
						))
					) : (
						<p>Web saytlar mavjud emas</p>
					)}
				</div>
			)}
		</section>
	)
}

export default Dashboard
