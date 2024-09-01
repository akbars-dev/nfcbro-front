import { useEffect } from 'react'
import api from '../../http/api'

const ProtectedRoute = ({ children, type }) => {
	useEffect(() => {
		async function fetchData() {
			if (type == 'costumer') {
				const token = localStorage.getItem('costumerAuth')
				if (!token) {
					return window.location.href = "/"
				}

				const data = await api.checkToken(token)


				console.log(data.data.isAuth == false)


				if (data.data.isAuth == false) {
					return window.location.href = "/"
				}
			} else if (type == 'admin') {
				const token = localStorage.getItem('token')
				console.log('admin')

				if (!token) {
					return window.location.href = "/admin/login"
				}


				const data = await api.checkToken(token)

				if (data.isAuth == false) {
					return window.location.href = "/admin/login"
				}
			}
		}

		fetchData()
	}, [])

	return children
}

export default ProtectedRoute
