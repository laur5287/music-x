import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'
import { signIn, signOut } from "next-auth/react"
import { options } from "@/app/api/auth/[...nextauth]/options"
import { getCurrentUserProfile, getFollowedArtists, getCurrentUserPlaylists } from "@/utils/musicX/generic_utils"
import { getServerSession } from "next-auth/next"


const Home = async (props: any) => {
	const session = await getServerSession(options)
	if (!session && !session.accessToken) { console.log('this is from Home page, -> there is no session, please login in ') }
	const userProfile = await getCurrentUserProfile(session.accessToken)
	const followedArtists = await getFollowedArtists(session.accessToken)
	const userPlaylists = await getCurrentUserPlaylists(session.accessToken)

	if (session) {
		return (
			<>
				<code className="">
					{/* <pre>{JSON.stringify(userProfile, null, 2)}</pre> */}

				</code>
				<hr></hr>
				{/* <pre>{JSON.stringify(followedArtists, null, 2)}</pre> */}
				<hr></hr>

				<pre>{JSON.stringify(followedArtists, null, 2)}</pre>
				<hr></hr>
				{/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
				<p className="">
					<span className="">Signed in as: </span>
					<span>
						{session.user?.email}
					</span>

				</p>
				{/* <Button onClick={() => signOut()}>Sign out</Button> */}
			</>
		)

	}
	return (
		<>
			Not signed in <br />
			<Button onClick={() => signIn()}>Sign in</Button>
		</>
	)
}
export default Home
