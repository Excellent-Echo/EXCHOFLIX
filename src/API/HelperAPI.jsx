import axios from 'axios'

const HelperAPI = axios.create({
	baseURL: 'https://api.themoviedb.org/3'
})

export default HelperAPI
