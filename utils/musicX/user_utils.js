export async function getUserPlaylists(session) {
    if (session) {
        const response = await fetch('https://api.spotify.com/v1/me/playlists', {
            headers: {
                "Authorization": `Bearer ${session.accessToken}`
            }
        })
        const data = await response.json()
        return data

    }
}

export async function getUserPlaylist_tracks(session, id) {

    const response = await fetch(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
        headers: {
            "Authorization": `Bearer ${session.accessToken}`
        }
    })
    const data = await response.json()
    return data
}
