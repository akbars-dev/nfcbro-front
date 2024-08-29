import styles from './app-form.module.scss'

import AppFormButtons from "../app-form-buttons/app-form-buttons.jsx"
import AppFormProfile from '../app-form-profile/app-form-profile'


// name,
// 	about,
// 	username,
// 	password,
// 	profilePic,
// 	backroundPic,
// 	watermark,
// 	buttons,
// 	createPage


function AppForm({
	setName,
	setAbout,
	setUsername,
	setPassword,
	setProfilePic,
	setBackroundPic,
	setWatermark,
	setButtons,
	watermark,
	createPage
}) {




	return (
		<div className={styles['app-form']}>
			<AppFormProfile
				setName={setName}
				setAbout={setAbout}
				setUsername={setUsername}
				setPassword={setPassword}
				setProfilePic={setProfilePic}
				setWatermark={setWatermark}
				setBackroundPic={setBackroundPic}
				watermark={watermark}
			/>
			<AppFormButtons createPage={createPage} setButtons={setButtons} />
		</div>
	)
}

export default AppForm