export async function getTrack(session, id) {

    const response = await fetch(`https://api.spotify.com/v1/tracks/${id}`, {
        headers: {
            "Authorization": `Bearer ${session.accessToken}`
        }
    })
    const data = await response.json()
    return data

}