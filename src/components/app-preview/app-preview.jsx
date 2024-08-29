import pic from '../../assets/images/main-bg.png'
import PreviewButton from '../preview-button/preview-button'
import styles from './app-profile.module.scss'

function AppPreview({
	name,
	about,
	profilePic = pic,  // Use default image if not provided
	backgroundPic,
	watermark,
	buttons,
	setButtons
}) {
	const removeButton = (index) => {
		setButtons(buttons => buttons.filter((_, i) => i !== index))
	}

	return (
		<div className={styles['app-preview']}>
			{/* Conditionally render profile picture */}
			{profilePic && (
				<div className={styles['profilePic']}>
					<img className={styles['img']} src={profilePic} alt="profilePic" />
				</div>
			)}

			{/* Conditionally render name */}
			{name && <h1 className={styles['name']}>{name}</h1>}

			{/* Conditionally render about section */}
			{about && <p className={styles['about']}>{about}</p>}

			{/* Conditionally render buttons */}
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
							removeButton={removeButton}
							index={index}
						/>
					))}
				</div>
			)}

			{/* Always render watermark with the provided value or a default message */}

			{watermark ?
				<div className={styles['watermark']}>
					<span className={styles['watermark-text']}>
						Bu sayt ZET GROUP tomonidan yasalgan. Buyurtma uchun: +998 77 777 27 87
					</span>
				</div> : ''
			}


		</div>
	)
}

export default AppPreview
