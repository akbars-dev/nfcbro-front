import { useState } from 'react'
import styles from './admin-form.module.scss'

function LoginForm({ setUsername, setPassword, handleSubmit }) {
	const [loading, setLoading] = useState(false)
	async function handleFormSubmit(e) {
		e.preventDefault()
		setLoading(true)
		await handleSubmit()
		setLoading(false)
	}

	return (
		<div className={styles['admin-form']}>
			<span className={styles['form-title']}>Akkauntga kiring</span>
			<input
				onInput={(e) => setUsername(e.target.value)}
				className={styles['form-input']}
				type="text"
				placeholder='Username kiriting'
			/>
			<input
				onInput={(e) => setPassword(e.target.value)}
				className={styles['form-input']}
				type="password"
				placeholder='Parol kiriting'
			/>
			<button
				onClick={handleFormSubmit}
				className={styles['form-button']}
			>
				{loading ? 'Kirilmoqda...' : 'Kirish'}
			</button>
		</div>
	)
}

export default LoginForm
