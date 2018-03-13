const url='https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:country&api_key=e21c6bcda184e35e31fa26b3118c1b86&format=json'

export default	function artistas(country){
		const URL = url.replace(':country',country)
		return fetch(URL)
		 .then(resp => resp.json())
		 .then(json => json.topartists.artist)
	}