import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ProtectedRoute from './components/protected-router/protected-router'
import Admin from './layout/admin'
import AdminLoginPage from './pages/AdminLogin'
import Create from './pages/Create'

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/admin" element={<Admin />}>
					<Route path="create" element={
						<ProtectedRoute>
							<Create />
						</ProtectedRoute>
					} />
				</Route>
				<Route path='/admin/login' element={<AdminLoginPage />} />
			</Routes>
		</Router>
	)
}

export default App