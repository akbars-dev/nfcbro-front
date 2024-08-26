import styles from './app-form.module.scss'

import AppFormProfile from '../app-form-profile/app-form-profile'
import AppFormButtons from "../app-form-buttons/app-form-buttons.jsx";


function AppForm() {
	return (
		<div className={styles['app-form']}>
			<AppFormProfile />
			<AppFormButtons/>
		</div>
	)
}

export default AppForm