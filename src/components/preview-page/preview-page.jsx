import { useState } from 'react'
import api from '../../http/api'
import PreviewButton from '../preview-button/preview-button'
import styles from './preview-page.module.scss'

function UpdateModal({ isOpen, onClose, updateButtonUrl, setNewUrl }) {
	return (
		<div className={isOpen ? styles['modal-open'] : styles['modal-closed']}>
			<div className={styles['modal-content']}>
				<p>O'zgartirish uchun url kiriting</p>
				<input onInput={(e) => setNewUrl(e.target.value)} className='' type="text" placeholder='URL kiriting' />

				<button onClick={updateButtonUrl}>Yangilash</button>
				<button onClick={onClose}>Yopish</button>
			</div>
		</div>
	)
}


function PreviewPage({
	name,
	about,
	profilePic,
	watermark,
	buttons,
	isUpdate
}) {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [newUrl, setNewUrl] = useState()
	const [index, setIndex] = useState()

	const updateButtonUrl = async () => {
		const button = buttons
			.filter((_, i) => i === index)

		await api.updateButton(button[0].id, newUrl)

		setIsModalOpen(false)
	}


	const closeModal = () => {
		setIsModalOpen(false)
	}



	return (
		<section className={styles['preview-section']}>
			{profilePic && (
				<div className={styles['profilePic']}>
					<img className={styles['pic-image']} src={`${import.meta.env.VITE_API_URL}/${profilePic}`} alt="profilePic" />
				</div>
			)}

			{name && <h1 className={styles['name']}>{name}</h1>}
			{about && <p className={styles['about']}>{about}</p>}

			{buttons && buttons.length > 0 && (
				<div className={styles['buttons']}>
					{buttons.map((button, index) => (
						<PreviewButton
							key={index}
							label={button.label}
							url={button.url}
							bgColor={button.bgColor}
							textColor={button.textColor}
							type={button.type}
							animation={button.animation}
							index={index}
							isUpdate={isUpdate}
							update={() => { setIsModalOpen(!isModalOpen), setIndex(index) }}
						/>
					))}
				</div>
			)}

			{watermark && (
				<div className={styles['watermark']}>
					<span className={styles['watermark-only']}>
						<b>zetnfc.uz</b> orqali yasalgan
					</span>
					<span className={styles['watermark-text']}>
						Bu sayt ZET GROUP tomonidan yasalgan. Buyurtma uchun: +998 77 777 27 87
					</span>
				</div>
			)}

			<UpdateModal updateButtonUrl={updateButtonUrl} setNewUrl={setNewUrl} isOpen={isModalOpen} onClose={closeModal} />
		</section>
	)
}

export default PreviewPage