import styles from './admin-form.module.scss'

function LoginForm({ setUsername, setPassword, handleSubmit }) {
	return <div className={styles['admin-form']}>
		<span className={styles['form-title']}>Akkauntga kiring</span>
		<input onInput={(e) => setUsername(e.target.value)} className={styles['form-input']} type="text" placeholder='Username kiriting' />
		<input onInput={(e) => setPassword(e.target.value)} className={styles['form-input']} type="text" placeholder='Parol kiriting' />
		<button onClick={(e) => handleSubmit(e)} className={styles['form-button']}>Kirish</button>
	</div>
}

export default LoginForm