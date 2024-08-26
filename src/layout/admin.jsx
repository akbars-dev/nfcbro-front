import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/navbar'

const Admin = () => {
	return (
		<div>
			<Navbar />
			<Outlet />
		</div>
	)
}

export default Admin
