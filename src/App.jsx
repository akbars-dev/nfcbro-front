import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ProtectedRoute from './components/protected-router/protected-router'
import Admin from './layout/admin'
import NotFound from './pages/404'
import AdminLoginPage from './pages/AdminLogin'
import Create from './pages/Create'
import PageProfile from './pages/PageProfile'
import Update from './pages/Update'

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

					<Route path='update/:pageId' element={
						<ProtectedRoute>
							<Update />
						</ProtectedRoute>
					} />
				</Route>
				<Route path='/admin/login' element={<AdminLoginPage />} />

				{/* costumer routers   */}
				<Route path='/:username' element={<PageProfile />} />
				<Route path='/404' element={<NotFound />} />
			</Routes>
		</Router>
	)
}

export default App