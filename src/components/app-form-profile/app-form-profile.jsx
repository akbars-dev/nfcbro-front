import styles from './app-form-profile.module.scss'

import { useRef } from 'react'


function AppFormProfile() {

	const fileInputRef = useRef(null)

	const handleFileInp = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click()
		}
	}

	return <div className={styles['app-form-profile']}>
		<span className={styles['profile-title']}>Profilni toldiring</span>
		<input
			ref={fileInputRef}
			className="file-inp"
			type="file"
			style={{ display: 'none' }} // Optionally hide the file input
		/>		<button onClick={(e) => handleFileInp(e)} className={styles['profile-button']}>Avatarka tanlang</button>
		<input className={styles['profile-inp']} type="text" placeholder='Ismingizni yozing' />
		<textarea placeholder="O'zingiz haqingizda yozing" className={styles['profile-area']} id="profile-area"></textarea>
	</div>
}

export default AppFormProfile