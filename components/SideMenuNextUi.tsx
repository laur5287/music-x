'use client'
import { useSession } from "next-auth/react"
import { Artist, Playlist } from "@/lib/types";
import { Card, CardBody, CardFooter, Dropdown, DropdownMenu, DropdownTrigger, Image, Button, DropdownItem } from "@nextui-org/react";
import Link from "next/link";
import { CloudFog, Home, LibraryBig, Music } from "lucide-react";
import { Divider } from "@nextui-org/react";
import { Session } from "@/lib/types";
import { getCurrentUserPlaylists, getFollowedArtists } from '@/utils/musicX/generic_utils'
import { useEffect, useState } from 'react'



export default function SideMenuNextUi() {

	const { data: session, status } = useSession()
	const [items, setItems] = useState<Artist[] | null>(null)
	const [playlists, setPlaylists] = useState<Playlist[] | null>(null)
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				if (!(session as Session).accessToken) {
					return
				}
				const accessToken = (session as Session).accessToken;
				const userPlaylists = await getCurrentUserPlaylists(accessToken!)
				const userArtists = await getFollowedArtists(accessToken!)
				setItems(userArtists.artists.items)
				setPlaylists(userPlaylists.items)
			} catch (error) {
			} finally {
				setLoading(false)
			}
		}; //fetchData definition

		if (session) {
			setLoading(true)
			fetchData()
		}
	}, [session]);

	if (!session) { return <div className="">No session</div> }

	return (
		<>
			<Link className="flex gap-4  py-3.5 px-2 font-semibold bg-foreground/10" href='/'>
				<Home className="w-6 h-6" />
				<span className="">Home</span>
			</Link>
			<Divider orientation="horizontal" />
			<div className="flex gap-4 bg-foreground/10  py-3.5 px-2 font-semibold " >
				<LibraryBig className="w-6 h-6" />
				<span className="">Your playlists</span>
			</div>
			<Divider orientation="horizontal" />
			<div className="" id="playlists-wrapper">
				{playlists ? playlists.map(playlist => (
					<Card
						isBlurred
						id='playlist-card'
						as={Link}
						href={`/playlist/${playlist.id}`}
						shadow="sm"
						key={playlist.id}
						isPressable
						// onPress={() => console.log(item.name)}
						className="flex flex-row items-start w-full h-auto gap-2 p-2 bg-background"
					>
						<CardBody className="w-auto p-0 overflow-hidden">
							<Image
								shadow="sm"
								radius="lg"
								width="100%"
								alt={playlist.name}
								className="object-cover w-12 h-12"
								src={playlist.images[0].url}
							/>

						</CardBody>
						<CardFooter className="flex-col items-start justify-start p-0 text-small">
							<b>{playlist.name}</b>
							<p className="text-default-500">{playlist.type}</p>
						</CardFooter>
					</Card>
				)) : <span>No playlist</span>}
			</div>

			<div className="flex gap-4 bg-foreground/10  py-3.5 px-2 font-semibold " >
				<Music className="w-6 h-6" />
				<span >Your favorite artists</span>
			</div>
			<Divider orientation="horizontal" />
			<div className="" id="user-follow-artists">
				{items ? items.map((item, index) => (
					// <div className="flex items-center w-full">
					<Card
						isBlurred
						id="artist-card"
						as={Link}
						href={`/artist/${item.id}`}
						shadow="sm"
						key={item.id}
						isPressable
						// onPress={() => console.log(item.name)}
						className="flex flex-row items-start w-full h-auto gap-2 p-2 bg-background"

					>
						<CardBody className="w-auto p-0 overflow-hidden">
							<Image
								shadow="sm"
								radius="lg"
								width="100%"
								alt={item.name}
								className="object-cover w-12 h-12"
								src={item.images[0].url}
							/>

						</CardBody>
						<CardFooter className="flex-col items-start justify-start p-0 text-small">
							<b>{item.name}</b>
							<p className="text-default-500">{item.type}</p>
						</CardFooter>

					</Card>
					// </div>

				)) : <span className="">No favorite artists</span>}
			</div>


		</>
	)
}