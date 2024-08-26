import { useState } from 'react'
import AdminForm from '../components/admin-form/admin-form'
import api from '../http/api'

function AdminLoginPage() {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")

	const handleSubmit = async (e) => {
		const response = await api.login(username, password)
		const token = response.data

		localStorage.setItem('token', token)
		return token
	}
	return <>
		<AdminForm
			setUsername={setUsername}
			setPassword={setPassword}
			handleSubmit={handleSubmit}
		/>
	</>
}

export default AdminLoginPage