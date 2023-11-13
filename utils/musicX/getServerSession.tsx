
import { getServerSession } from "next-auth/next"
import { options } from "@/app/api/auth/[...nextauth]/options"

export const getSession = async () => {

	const session = await getServerSession(options)
	if (session) {
		return session
	}
	return null
}