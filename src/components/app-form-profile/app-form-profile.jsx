import { useRef, useState } from 'react'
import SwitchButton from '../switch/switch'
import styles from './app-form-profile.module.scss'

function AppFormProfile({
	setName,
	setAbout,
	setUsername,
	setPassword,
	setProfilePic,
	setBackroundPic,
	setWatermark,
	watermark
}) {
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
			setProfilePic(e.target.files[0]) // Set the profile picture
		}
	}

	const handleBackgroundChange = (e) => {
		if (e.target.files && e.target.files.length > 0) {
			setBackgroundButtonText('Orqa fon tanlandi')
			setBackroundPic(e.target.files[0]) // Set the background picture
		}
	}

	return (
		<div className={styles['app-form-profile']}>
			<span className={styles['profile-title']}>Sahifani toldiring</span>

			{/* Avatar Upload */}
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

			{/* Name Input */}
			<input
				className={styles['profile-inp']}
				type="text"
				placeholder="Ismingizni yozing"
				onChange={(e) => setName(e.target.value)} // Update name state
			/>

			{/* About Input */}
			<textarea
				placeholder="O'zingiz haqingizda yozing"
				className={styles['profile-area']}
				id="profile-area"
				onChange={(e) => setAbout(e.target.value)} // Update about state
			></textarea>

			{/* Background Upload */}
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

			{/* Username Input */}
			<input
				className={styles['profile-inp']}
				type="text"
				placeholder="Foydalanuvchi nomini yozing"
				onChange={(e) => setUsername(e.target.value)} // Update username state
			/>

			{/* Password Input */}
			<input
				className={styles['profile-inp']}
				type="password"
				placeholder="Parolni yozing"
				onChange={(e) => setPassword(e.target.value)} // Update password state
			/>

			{/* Watermark Switch */}
			<div className={styles['profile-switch']}>
				<span>Watermark qoyish:</span>
				<SwitchButton setWatermark={setWatermark} watermark={watermark} />
			</div>
		</div>
	)
}

export default AppFormProfile
