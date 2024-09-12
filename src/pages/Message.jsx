import AppMessage from '../components/app-message/app-message'

export function Message({ msg }) {
	return <>
		<AppMessage path={'/admin/dashboard'} message={`Sahifa muafaqiyatli ${msg}`} />
	</>
}