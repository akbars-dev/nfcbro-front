import styles from './app-template.module.scss'

import AppForm from '../app-form/app-form'
import AppPreview from '../app-preview/app-preview'


function AppTemplate() {
	return <section className={styles['app-template']}>
		<AppForm />
		<AppPreview />
	</section>
}

export default AppTemplate