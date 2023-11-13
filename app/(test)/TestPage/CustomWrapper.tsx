'use client'
import { getCurrentUserProfile } from '@/utils/musicX/generic_utils'
import { options } from "@/app/api/auth/[...nextauth]/options"

import { useSession } from "next-auth/react"
// import { getServerSession } from "next-auth/next"

async function getGlobalData() {

	// const session = await getServerSession(options)
	const { data: session } = useSession()
	if (!session) { return console.log('Custom Wrapper: no session ') }
	console.log(session)

	// const data = await getCurrentUserProfile(session.accessToken)
	// return data
}

export default function CustomWrapper({
	children, ...props
}: {
	children: React.ReactNode,
	props?: any

}) {
	return (
		<div id='customWrapper' {...props} className="">{children}</div>
	)
}