import axios from 'axios'

class Api {
	constructor(domain) {
		this.baseUrl = `http://${domain}/api`
	}

	async checkToken(token) {
		const response = await axios.post(this.baseUrl + '/check/token', {
			token: token
		})

		return response.data
	}

	async login(username, password) {
		const response = await axios.post(this.baseUrl + '/admin/login', {
			username: username,
			password: password
		})

		return response.data
	}

	async pagesLogin(username, password) {
		const response = await axios.post(this.baseUrl + '/pages/login', {
			username: username,
			password: password
		})

		return response.data
	}

	async createPage(name, about, profilePic, backgroundPic, watermark, buttons, username, password) {
		try {
			const formData = new FormData()
			formData.append('name', name)
			formData.append('about', about)
			formData.append('username', username)
			formData.append('password', password)
			formData.append('profilePic', profilePic)
			formData.append('backroundPic', backgroundPic)
			formData.append('watermark', watermark)
			formData.append('buttons', JSON.stringify(buttons)) // Convert buttons array/object to JSON string

			// Send POST request
			const response = await axios.post(this.baseUrl + '/pages/create', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})

			return response.data.data
		} catch (error) {
			console.error('Error creating page:', error)
			throw error // Re-throw the error for further handling if needed
		}
	}

	async updateButton(id, url) {
		try {
			const response = await axios.put(this.baseUrl + `/pages/update-button/${id}`, {
				url: url
			})

			return response.data
		} catch (error) {
			console.error('Error updating page:', error)
			throw error
		}
	}

	async updatePage(id, name, about, profilePic, backgroundPic, watermark, buttons, username, password) {
		try {
			const formData = new FormData()
			formData.append('name', name)
			formData.append('about', about)
			formData.append('username', username)
			formData.append('password', password)
			formData.append('profilePic', profilePic)
			formData.append('backgroundPic', backgroundPic)
			formData.append('watermark', watermark)
			formData.append('buttons', JSON.stringify(buttons))  // Convert buttons array/object to JSON string


			const response = await axios.put(this.baseUrl + `/pages/update/${id}`, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})

			return response.data.data
		} catch (error) {
			console.error('Error updating page:', error)
			throw error
		}
	}


	async getPageData(username) {
		try {
			const page = await axios.get(this.baseUrl + `/pages/get/${username}`)
			return page.data.data
		} catch (e) {
			console.log(e)

			// window.location.href = '/404'
		}
	}
}

export default new Api('localhost:4200')