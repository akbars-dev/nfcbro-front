import { useRef, useState } from 'react'
import SwitchButton from '../switch/switch'
import styles from './app-form-profile.module.scss'

function AppFormProfile() {
	const fileInputRef = useRef(null)
	const bgInputRef = useRef(null)

	const [avatarButtonText, setAvatarButtonText] = useState('Avatarka tanlang')
	const [backgroundButtonText, setBackgroundButtonText] = useState('Orqa fon tanlang')

	const handleFileInp = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click()
		}
	}

	const handleBackgroundInp = () => {
		if (bgInputRef.current) {
			bgInputRef.current.click()
		}
	}

	const handleAvatarChange = (e) => {
		if (e.target.files && e.target.files.length > 0) {
			setAvatarButtonText('Avatarka tanlandi')
		}
	}

	const handleBackgroundChange = (e) => {
		if (e.target.files && e.target.files.length > 0) {
			setBackgroundButtonText('Orqa fon tanlandi')
		}
	}

	return (
		<div className={styles['app-form-profile']}>
			<span className={styles['profile-title']}>Sahifani toldiring</span>
			<input
				ref={fileInputRef}
				className="file-inp"
				type="file"
				style={{ display: 'none' }}
				onChange={handleAvatarChange}
			/>
			<button onClick={handleFileInp} className={styles['profile-button']}>
				{avatarButtonText}
			</button>

			<input
				className={styles['profile-inp']}
				type="text"
				placeholder="Ismingizni yozing"
			/>
			<textarea
				placeholder="O'zingiz haqingizda yozing"
				className={styles['profile-area']}
				id="profile-area"
			></textarea>

			<input
				ref={bgInputRef}
				className="file-inp"
				type="file"
				style={{ display: 'none' }}
				onChange={handleBackgroundChange}
			/>
			<button onClick={handleBackgroundInp} className={styles['profile-button']}>
				{backgroundButtonText}
			</button>
			<input
				className={styles['profile-inp']}
				type="text"
				placeholder="Ismingizni yozing"
			/>
			<input
				className={styles['profile-inp']}
				type="text"
				placeholder="Ismingizni yozing"
			/>

			<div className={styles['profile-switch']}>
				<span>Watermark qoyish:</span> <SwitchButton />
			</div>
		</div>
	)
}

export default AppFormProfile
