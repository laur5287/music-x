export async function getTrack(trackId: String, accessToken: String) {

	const response = await fetch(`https://api.spotify.com/v1/tracks/${trackId}`, {
		headers: {
			"Authorization": `Bearer ${accessToken}`
		}
	})
	if (!response.ok) {
		throw new Error(`Failed response in getTrack(), ${response.statusText}`);
	}
	const data = await response.json()
	return data

}
export async function getArtist(artistId: string, accessToken: string) {

	const URL = `https://api.spotify.com/v1/artists/${artistId}`
	const headers = { 'Authorization': `Bearer ${accessToken}` }
	//Make the requst
	const response = await fetch(URL, {
		headers
	})
	// if (!response.ok) {
	// 	throw new Error(`Failed response in getArtist, ${response}`);
	// }
	// Parse the JSON response
	const data = await response.json();

	// Extract and return the access token
	return data
}
export async function getUserPlaylists(accessToken: String) {

	const URL = `https://api.spotify.com/v1/me/playlists`
	const headers = { 'Authorization': `Bearer ${accessToken}` }
	//Make the requst
	const response = await fetch(URL, {
		headers
	})
	if (!response.ok) {
		throw new Error(`Failed response in getArtistData, ${response.statusText}`);
	}
	// Parse the JSON response
	const data = await response.json();

	// Extract and return the access token
	return data
}
export async function getCurrentUserProfile(accessToken: String) {

	const URL = `https://api.spotify.com/v1/me`
	const headers = { 'Authorization': `Bearer ${accessToken}` }
	//Make the requst
	const response = await fetch(URL, {
		headers
	})

	// Parse the JSON response
	const data = await response.json();

	// Extract and return the access token
	return data
}
export async function getFollowedArtists(accessToken: string) {
	const URL = `https://api.spotify.com/v1/me/following?type=artist`
	const headers = { 'Authorization': `Bearer ${accessToken}` }
	const response = await fetch(URL, {
		headers
	})
	const data = await response.json();
	return data
}
export async function getCurrentUserPlaylists(accessToken: string) {
	const URL = `https://api.spotify.com/v1/me/playlists?offset=0`
	const headers = { 'Authorization': `Bearer ${accessToken}` }
	const response = await fetch(URL, {
		headers
	})
	const data = await response.json();
	return data
}

export async function getUserTopItems(accessToken: string, type: string) {
	// Allowed values for ****type**** : "artists", "tracks"
	const URL = `https://api.spotify.com/v1/me/top/${type}`
	const headers = { 'Authorization': `Bearer ${accessToken}` }
	const response = await fetch(URL, {
		headers
	})
	const data = await response.json();
	return data
}
export async function getArtistsTopTracks(accessToken: string, artistId: string) {
	const URL = `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=us`
	const headers = { 'Authorization': `Bearer ${accessToken}` }
	const response = await fetch(URL, {
		headers
	})
	const data = await response.json();
	return data
}
export async function getPlaylistItems(accessToken: string, playlistId: string) {
	const URL = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`
	// const searchParameters = new URLSearchParams()
	// searchParameters.append('','')
	const headers = { 'Authorization': `Bearer ${accessToken}` }
	const response = await fetch(URL, {
		headers
	})
	const data = await response.json();
	return data
}
export async function getPlaylistCoverImage(accessToken: string, playlistId: string) {
	const URL = `https://api.spotify.com/v1/playlists/${playlistId}/images`
	const headers = { 'Authorization': `Bearer ${accessToken}` }
	const response = await fetch(URL, {
		headers
	})
	const data = await response.json();
	return data
}