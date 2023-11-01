'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'

export const PopularArtists = () => {

    // const res = await fetch(`http://localhost:3000/api/spotify/search?q=${userInput}&type=track`, {
    // })
    // const result = await res.json()
    // // console.log(result)
    // setTracks(result.tracks.items)
    const { data: session } = useSession()
    const [x, setX] = useState('')
    const [playlists, setPlaylists] = useState([])
    useEffect(() => {
        async function f() {
            if (session && session.accessToken) {
                setX(session.accessToken)
                const response = await fetch('https://api.spotify.com/v1/me/playlists', {
                    headers: {
                        "Authorization": `Bearer ${session.accessToken}`
                    }
                })
                const data = await response.json()
                setPlaylists(data.items)
                // console.log(session)
                // console.log(playlists)
            }

        }
        f()

    }, [session])

    return (
        <>
            <div>access token: {x}</div>

            <ul>
                {playlists.map(playlist => {
                    return (
                        <div key={playlist.id}>{playlist.name}</div>
                    )
                })}
            </ul>

        </>
    )
}
