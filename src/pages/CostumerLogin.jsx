import { useState } from 'react'
import LoginForm from '../components/login-form/login-form'
import api from '../http/api'

function CostumerLogin() {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")

	const handleSubmit = async (e) => {
		const response = await api.pagesLogin(username, password)
		const token = response.data.token
		const page = JSON.stringify(response.data.page)

		localStorage.setItem('costumerAuth', token)
		localStorage.setItem('page', page)
		return window.location.href = "/edit"
	}
	return <>
		<div style={{ padding: '10px' }}>
			<LoginForm
				setUsername={setUsername}
				setPassword={setPassword}
				handleSubmit={handleSubmit}
			/>
		</div>
	</>
}

export default CostumerLogin