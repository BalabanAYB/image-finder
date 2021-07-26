import axios from 'axios'

const api_key = 'ebd38066d5f0ccb4c766685e03dce652'

const instance = axios.create({
	baseURL: 'https://www.flickr.com/services/rest/'
})

export const imageAPI = {
	searchImage (searchText: string, page: number, size: number) {
		return instance.get(`?method=flickr.photos.search&api_key=${api_key}&text=${searchText}&page=${page}&per_page=${size}&format=json&nojsoncallback=1`)
		.then(res => res.data)
	},
	getImages (serverId: string, id: string, secret: string) {
		return axios.get(`https://live.staticflickr.com/${serverId}/${id}_${secret}.jpg`)
		.then(res => res.data)
	}
}
