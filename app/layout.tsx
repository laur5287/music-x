import "@/app/globals.css"
import { Providers } from "@/providers";
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import SideMenuNextUi from '@/components/SideMenuNextUi'
import SessionProvider from '@/app/context/AuthProvider'
import { getServerSession } from "next-auth/next" //server side session fetcher
import { options } from "@/app/api/auth/[...nextauth]/options"
import { getUserTopItems, getCurrentUserPlaylists } from '@/utils/musicX/generic_utils'


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
	const session = await getServerSession(options)

	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={cn(
					"h-screen relative   font-sans antialiased",
					fontSans.variable
				)}
			>
				{/* <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}> */}
				<SessionProvider session={session}>
					<div id="layout-wrapper" className="relative flex h-screen gap-2 p-2 ">
						<div id="SideMenu-wrapper" className="hidden w-[30vw] h-auto overflow-y-scroll flex-col lg:flex">
							<SideMenuNextUi />
						</div>
						<div id="children-layout-wrapper" className="overflow-hidden grow">
							{children}

						</div>
					</div>
				</SessionProvider>
				<TailwindIndicator />
				{/* </Providers> */}
			</body>
		</html >
	)
}
export default MusicXLayout
