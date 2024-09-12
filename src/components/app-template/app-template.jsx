import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../http/api'
import AppForm from '../app-form/app-form'
import AppPreview from '../app-preview/app-preview'
import styles from './app-template.module.scss'

function AppTemplate({ update, pageId }) {
	const [name, setName] = useState("")
	const [about, setAbout] = useState("")
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [profilePic, setProfilePic] = useState("")
	const [backroundPic, setBackroundPic] = useState("")
	const [watermark, setWatermark] = useState(false)
	const [buttons, setButtons] = useState([])
	const [loading, setLoading] = useState(false) // Add loading state
	const navigate = useNavigate()

	const removeButton = async (id, index) => {
		if (!id) {
			setButtons(buttons.filter((button, bIndex) => bIndex !== index))
		} else {
			const data = await api.deleteButton(id)
			setButtons(data.data)
		}
	}

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
	}, [pageId])

	const createPage = async () => {
		setLoading(true) // Set loading to true
		await api.createPage(
			name,
			about,
			profilePic,
			backroundPic,
			watermark,
			buttons,
			username,
			password
		)
		setLoading(false) // Set loading to false
		navigate("/admin/message/created")
	}

	const updatePage = async () => {
		setLoading(true) // Set loading to true
		await api.updatePage(
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
		setLoading(false) // Set loading to false
		navigate("/admin/message/updated")
	}

	return (
		<section className={styles['app-template']}>
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
				createPage={createPage}
				name={name}
				about={about}
				username={username}
				password={password}
				profilePic={profilePic}
				backroundPic={backroundPic}
				buttons={buttons}
				update={update}
				loading={loading} // Pass loading state to AppForm
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
				removeButton={removeButton}
			/>
		</section>
	)
}

export default AppTemplate
