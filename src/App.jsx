import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ProtectedRoute from './components/protected-router/protected-router'
import Admin from './layout/admin'
import NotFound from './pages/404'
import AdminLoginPage from './pages/AdminLogin'
import CostumerLogin from './pages/CostumerLogin'
import Create from './pages/Create'
import PageProfile from './pages/PageProfile'
import Update from './pages/Update'
import CostumerUpdate from './pages/CostumerUpdate'

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/admin" element={<Admin />}>
					<Route path="create" element={
						<ProtectedRoute type="admin">
							<Create />
						</ProtectedRoute>
					} />

					<Route path='update/:pageId' element={
						<ProtectedRoute type="admin">
							<Update />
						</ProtectedRoute>
					} />
				</Route>
				<Route path='/admin/login' element={<AdminLoginPage />} />

				{/* costumer routers   */}

				<Route path='/' element={<CostumerLogin />} />
				<Route path='/:username' element={<PageProfile />} />

				<Route path='/edit' element={
					<ProtectedRoute type='costumer'>
						<CostumerUpdate />
					</ProtectedRoute>
				} />

				<Route path='/404' element={<NotFound />} />
			</Routes>
		</Router>
	)
}

export default App