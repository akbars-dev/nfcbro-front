import AppFormButtons from "../app-form-buttons/app-form-buttons"
import AppFormProfile from '../app-form-profile/app-form-profile'
import styles from './app-form.module.scss'

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
	updatePage,
	name,
	about,
	username,
	password,
	profilePic,
	backroundPic,
	update,
	buttons,
	loading // Add loading state here
}) {
	return (
		<div className={styles['app-form']}>
			<AppFormProfile
				setName={setName}
				setAbout={setAbout}
				setUsername={setUsername}
				setPassword={setPassword}
				setProfilePic={setProfilePic}
				setBackroundPic={setBackroundPic}
				setWatermark={setWatermark}
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
				buttons={buttons}
				loading={loading} // Pass loading state to AppFormButtons
			/>
		</div>
	)
}

export default AppForm
