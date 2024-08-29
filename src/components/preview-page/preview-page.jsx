import PreviewButton from '../preview-button/preview-button'
import styles from './preview-page.module.scss'

function PreviewPage({
	name,
	about,
	profilePic,
	watermark,
	buttons,
}) {
	return (
		<section className={styles['preview-section']}>
			{profilePic && (
				<div className={styles['profilePic']}>
					<img className={styles['pic-image']} src={`http://localhost:4200/${profilePic}`} alt="profilePic" />
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
		</section>
	)
}

export default PreviewPage
