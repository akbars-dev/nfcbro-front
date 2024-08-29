import styles from './app-template.module.scss'

import { useState } from 'react'
import api from '../../http/api'
import AppForm from '../app-form/app-form'
import AppPreview from '../app-preview/app-preview'


function AppTemplate() {
	const [name, setName] = useState("")
	const [about, setAbout] = useState("")
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [profilePic, setProfilePic] = useState("")
	const [backroundPic, setBackroundPic] = useState("")
	const [watermark, setWatermark] = useState(false)
	const [buttons, setButtons] = useState(null)

	const createPage = async () => {
		const data = await api.createPage(
			name,
			about,
			profilePic,
			backroundPic,
			watermark,
			buttons,
			username,
			password
		)

		console.log(data)
	}
	return <section className={styles['app-template']}>
		<AppForm
			setName={setName}
			setAbout={setAbout}
			setUsername={setUsername}
			setPassword={setPassword}
			setProfilePic={setProfilePic}
			setBackroundPic={setBackroundPic}
			setWatermark={setWatermark}
			setButtons={setButtons}
			watermark={watermark}
			createPage={createPage}
		/>
		<AppPreview
			name={name}
			about={about}
			username={username}
			password={password}
			profilePic={profilePic}
			backroundPic={backroundPic}
			watermark={watermark}
			buttons={buttons}
			setButtons={setButtons}
		/>
	</section>
}

export default AppTemplate