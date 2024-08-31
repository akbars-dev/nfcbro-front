import styles from './app-template.module.scss'

import { useEffect, useState } from 'react'
import api from '../../http/api'
import AppForm from '../app-form/app-form'
import AppPreview from '../app-preview/app-preview'


function AppTemplate({ update, pageId }) {
	const [name, setName] = useState("")
	const [about, setAbout] = useState("")
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [profilePic, setProfilePic] = useState("")
	const [backroundPic, setBackroundPic] = useState("")
	const [watermark, setWatermark] = useState(false)
	const [buttons, setButtons] = useState(null)

	useEffect(() => {
		async function fetchData() {
			const response = await api.getPageData(pageId)
			setName(response.name)
			setAbout(response.about)
			setUsername(response.username)
			setPassword(response.password)
			setProfilePic(response.profilePic)
			setBackroundPic(response.backroundPic)
			setWatermark(response.watermark)
			setButtons(response.buttons)
		}
		if (pageId) {
			fetchData()
		}
	}, [])

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

	const updatePage = async () => {
		const data = await api.updatePage(
			pageId,
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

	if (update) {
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
				updatePage={updatePage}
				name={name}
				about={about}
				username={username}
				password={password}
				profilePic={profilePic}
				backroundPic={backroundPic}
				buttons={buttons}
				update={update}
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