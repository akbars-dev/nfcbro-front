import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../http/api'
import styles from './dashboard.module.scss'


function Dashboard() {
	const [pages, setPages] = useState([])
	const navigate = useNavigate()


	async function handleDelete(id) {
		await api.deletePage(id)
		navigate('/admin/dashboard')
	}

	function handleEdit(id) {
		navigate(`/admin/update/${id}`)
	}

	async function fetchData() {
		const data = await api.allPages()
		setPages(data.data)
	}

	useEffect(() => {
		fetchData()
	}, [])

	return (
		<section className={styles['dashboard']}>
			<h1 className={styles['dashboard-title']}>Barcha veb saytlar</h1>

			<div className={styles['dashboard__cards']}>
				{pages.length > 0 ? (
					pages.map((page, index) => (
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
		</section>
	)
}



export default Dashboard
