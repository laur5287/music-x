
import "@/app/globals.css"
import LeftSideBar from '@/components/LeftSideBar'
import { SideMenu } from '@/components/sidemenu/SideMenu'
import CustomWrapper from "@/app/(test)/TestPage/CustomWrapper"
import { getCurrentUserProfile } from '@/utils/musicX/generic_utils'
import { getServerSession } from "next-auth/next"
import { options } from "@/app/api/auth/[...nextauth]/options"

export const metadata = {
	title: {
		default: 'TestPage',
		// template: `%s - ${siteConfig.name}`,
	},
	// description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],

}

export default async function TestPageLayout({
	children
}: {
	children: React.ReactNode,

}) {

	return (
		<CustomWrapper
		// props={globalData}
		>
			<div className="relative flex items-stretch h-screen gap-2 p-2">
				<div className="w-[350px] flex-col hidden lg:flex overflow-y-auto">
				</div>

				{children}

			</div>

		</CustomWrapper>
	)
}