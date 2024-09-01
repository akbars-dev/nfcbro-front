import { useState } from 'react'
import LoginForm from '../components/login-form/login-form'
import api from '../http/api'

function AdminLoginPage() {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")

	const handleSubmit = async (e) => {
		const response = await api.login(username, password)
		const token = response.data

		localStorage.setItem('token', token)
		return window.location.href = "/admin/create"
	}
	return <>
		<LoginForm
			setUsername={setUsername}
			setPassword={setPassword}
			handleSubmit={handleSubmit}
		/>
	</>
}

export default AdminLoginPage