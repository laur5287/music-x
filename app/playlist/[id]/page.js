
import { getServerSession } from "next-auth/next"
import { getUserPlaylist_tracks } from '@/utils/musicX/user_utils'
import { options } from "@/app/api/auth/[...nextauth]/options"
import Link from "next/link"
export default async function Page({ params }) {
    const session = await getServerSession(options)


    const data = await getUserPlaylist_tracks(session, params.id)
    console.log(data.items)


    return (
        <div className="flex flex-col">

            {data.items.map(item => {
                return (

                    <Link key={item.track.id} href={`/track/${item.track.id}`}>{item.track.name}
                    </Link>

                )

            })}
        </div>
    )
}
