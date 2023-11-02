'use client'
import { Button } from "@/components/ui/button";
import React, { Suspense, useEffect, useState } from 'react'
import Link from "next/link";
import { Icons } from "@/components/icons";
// import { generateRandomString } from "@/components/generateID";
import { Table } from '@/components/Table';

const Search = () => {
    const [userInput, setUserInput] = useState('')
    const [tracks, setTracks] = useState([])

    async function getData() {
        const res = await fetch(`http://localhost:3000/api/spotify/search?q=${userInput}&type=track`)
        const result = await res.json()
        // console.log(result)
        setTracks(result.tracks.items)

    }


    const handleChange = (e) => {
        e.preventDefault()
        const inputValue = e.target.value.toLowerCase()
        setUserInput(inputValue)
    }

    const handleSearch = async (e) => {
        e.preventDefault()
        if (!userInput) {
            console.error("User input is empty.");
            return;
        }
        const res = await fetch(`http://localhost:3000/api/spotify/search?q=${userInput}&type=track`, {
        })
        const result = await res.json()
        // console.log(result)
        setTracks(result.tracks.items)
    }
    useEffect(() => {
        // console.log(tracks)
        // console.log(userInput)
    }, [tracks, userInput])




    const content = (
        <div className="flex flex-col justify-start w-full h-full rounded-sm shadow-2xl">
            <input
                className="p-3 mb-6 text-2xl text-black bg-transparent rounded-2xl"
                type="text"
                id="name"
                name="artist"
                placeholder="Search for a song"
                // pattern="([A-Z])[\w+.]{1,}"
                value={userInput}
                onChange={handleChange}
                autoFocus
            />
            <button onClick={handleSearch}>Search</button>
            <Suspense fallback={<div>loading</div>}>
                <Table data={tracks} />

            </Suspense>

        </div>
    )
    return content
}

export default Search
