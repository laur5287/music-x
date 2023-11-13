


import "@/app/globals.css"

import React from 'react'
import AuthProvider from '@/app/context/AuthProvider'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { getServerSession } from "next-auth/next"
import { options } from "@/app/api/auth/[...nextauth]/options"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import LeftSideBar from '@/components/LeftSideBar'
import { SideMenu } from '@/components/sidemenu/SideMenu'
import { GreetingTitle } from "@/components/sidemenu/GreetingTitle";
import PageHeader from "@/components/sidemenu/PageHeader";
import { PlaylistCard } from "@/components/sidemenu/PlaylistCard";
import { PlaylistItemCard } from "@/components/sidemenu/PlaylistItemCard";
// import Layout from "../layouts/Layout.astro";
import { getCurrentUserProfile, getCurrentUserPlaylists, getFollowedArtists } from '@/utils/musicX/generic_utils'
import { getSession } from '@/utils/musicX/getServerSession'

export const metadata = {
	title: {
		default: 'MusicX',
		// template: `%s - ${siteConfig.name}`,
	},
	// description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {

	},
}
const MusicXLayout = async ({ children }: { children: React.ReactNode }) => {
	const session = await getSession()
	const userProfile = await getCurrentUserProfile(session.accessToken)
	const userArtists = await getFollowedArtists(session.accessToken)
	const userPlaylists = await getCurrentUserPlaylists(session.accessToken)

	return (

		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={cn(
					"h-screen relative   font-sans antialiased",
					fontSans.variable
				)}
			>
				<ThemeProvider attribute="class" enableSystem>

					<AuthProvider session={session}>
						<div id="layout-wrapper" className="relative flex items-stretch h-screen gap-2 p-2">
							<div id="SideMenu-wrapper" className="w-[350px] flex-col hidden lg:flex overflow-y-auto">
								<SideMenu userArtists={userArtists} userPlaylists={userPlaylists} />
							</div>

							{children}

						</div>
						<TailwindIndicator />
					</AuthProvider>
				</ThemeProvider>
			</body>
		</html >
	)
}
export default MusicXLayout
