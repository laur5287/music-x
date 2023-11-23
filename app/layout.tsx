import "@/app/globals.css"
import { Providers } from "@/providers";
// import AuthProvider from '@/app/context/AuthProvider'
import PageHeader from "@/components/sidemenu/PageHeader";
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { getCurrentUserPlaylists, getFollowedArtists } from '@/utils/musicX/generic_utils'
import { getSession } from '@/utils/musicX/getServerSession'
import { Artist } from "@/lib/types";
import SideMenuNextUi from '@/components/SideMenuNextUi'
import { Session } from '@/lib/types'


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


	const userArtists = await getFollowedArtists(session.accessToken)
	const userPlaylists = await getCurrentUserPlaylists(session.accessToken)
	// const iconClasses = "text-xl text-default-500  pointer-events-none flex-shrink-0"
	const items: Artist[] = userArtists.artists.items

	return (

		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={cn(
					"h-screen relative   font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div id="layout-wrapper" className="relative flex h-screen gap-2 p-2 ">
						<div id="SideMenu-wrapper" className="hidden w-[30vw] h-auto overflow-y-scroll flex-col lg:flex">
							<SideMenuNextUi userArtists={userArtists} userPlaylists={userPlaylists} />
						</div>
						<div id="children-layout-wrapper" className="overflow-hidden grow">
							<PageHeader session={session} />
							{children}

						</div>
					</div>
					<TailwindIndicator />
				</Providers>
			</body>
		</html >
	)
}
export default MusicXLayout
