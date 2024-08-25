import styles from './app-form.module.scss'

import AppFormProfile from '../app-form-profile/app-form-profile'


function AppForm() {
	return (
		<div className={styles['app-form']}>
			<AppFormProfile />
		</div>
	)
}

export default AppForm