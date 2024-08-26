import styles from './app-profile.module.scss';
import pic from '../../assets/images/main-bg.png';

import PreviewButton from "../preview-button/preview-button.jsx";

function AppPreview() {
	return (
		<div className={styles['app-preview']}>
			<div className={styles['profilePic']}>
				<im className={styles['img']} src={pic} alt="profilePic" />
			</div>

			<h1 className={styles['name']}>Akbar Olimjonov</h1>
			<p className={styles['about']}>Mening ismim Akbar yoshim 15da. Men 2009-yil tug'ilganman</p>

			<div className={styles['buttons']}>
				<PreviewButton
					label="INSTAGRAM"
					url="+998900431504"
					bgColor="#fff"
					textColor="#000"
					type='telefon'
					animation={'oddiy'}
				/>

				<PreviewButton
					label="TELEGRAM"
					url="+998900431504"
					bgColor="#fff"
					textColor="#000"
					type='telefon'
					animation={'oddiy'}
				/>

				<PreviewButton
					label="TELEFON"
					url="+998900431504"
					bgColor="#fff"
					textColor="#000"
					type='telefon'
					animation={'oddiy'}
				/>
			</div>

			<div className={styles['watermark']}>
				{/*<img width="40px" src={logo} alt=""/>*/}
				<span className={styles['watermark-text']}>
					Bu sayt ZET GROUP tomonidan yasalgan. <br/>
					Buyurtma uchun: +998 77 777 27 87
				</span>
			</div>
		</div>
	)
}

export default AppPreview