import axios from 'axios'

class Api {
	constructor(domain) {
		this.baseUrl = `http://${domain}/api`
	}

	async login(username, password) {
		const response = await axios.post(this.baseUrl + '/admin/login', {
			username: username,
			password: password
		})

		return response.data
	}
}

export default new Api('localhost:4200')