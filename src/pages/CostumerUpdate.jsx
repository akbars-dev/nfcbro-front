import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PreviewPage from '../components/preview-page/preview-page'
import api from '../http/api'

function CostumerUpdate() {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const { username } = useParams()


	useEffect(() => {
		const fetchData = async () => {
			try {
				const page = JSON.parse(localStorage.getItem('page'))
				const response = await api.getPageData(page.username)
				setData(response)
			} catch (err) {
				setError(JSON.parse(JSON.stringify(err.response.data.message)))
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [username])

	useEffect(() => {
		console.log(data)

		document.body.style.backgroundImage = `url(${import.meta.env.VITE_API_URL}/${data?.backroundPic})`
		document.body.style.backgroundSize = 'cover'
		document.body.style.backgroundPosition = 'center'

		return () => {
			document.body.style.backgroundImage = ''
			document.body.style.backgroundSize = ''
			document.body.style.backgroundPosition = ''
		}
	}, [data, loading])

	if (loading) return <p>Loading...</p>
	if (error) return <p>Error: {error.message}</p>

	return (
		<PreviewPage
			name={data?.name}
			about={data?.about}
			profilePic={data?.profilePic}
			watermark={data?.watermark}
			buttons={data?.buttons}
			isUpdate={true}
		/>
	)
}

export default CostumerUpdate
