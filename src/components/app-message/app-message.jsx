import { Link } from 'react-router-dom'
import styles from './app-message.module.scss'

export default function AppMessage({ message, path }) {
	return <div className={styles['app-message']}>
		<h1 className={styles['message-title']}>{message}</h1>

		<div className={styles['message-buttons']}>
			<Link to={path}><button className={styles['button']}>Bosh sahifa qaytish</button></Link>
		</div>
	</div >
}