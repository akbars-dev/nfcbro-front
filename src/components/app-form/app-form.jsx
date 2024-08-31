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
	createPage,
	name,
	about,
	username,
	password,
	profilePic,
	backroundPic,
	update,
	updatePage,
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
				name={name}
				about={about}
				username={username}
				password={password}
				profilePic={profilePic}
				backroundPic={backroundPic}
			/>
			<AppFormButtons
				updatePage={updatePage}
				createPage={createPage}
				update={update}
				setButtons={setButtons}
			/>
		</div>
	)
}

export default AppForm