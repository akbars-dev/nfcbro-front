import { useParams } from 'react-router-dom'
import AppTemplate from '../components/app-template/app-template'

function Update() {
	const { pageId } = useParams('pageId')



	return <>
		<AppTemplate update={true} pageId={pageId} />
	</>
}


export default Update