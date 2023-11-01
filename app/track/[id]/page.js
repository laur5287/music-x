
import { getServerSession } from "next-auth/next"
// import { getServerSession } from "next-auth/next"
import { useSession } from "next-auth/react"
import { getTrack } from '@/utils/musicX/generic_utils'
import { options } from "@/app/api/auth/[...nextauth]/options"
import { Button } from '@/components/ui/button'
import Download from '@/components/Download'
import Link from "next/link"

async function Track({ params }) {
    // const { data: session, status } = useSession()
    // console.log(session)
    // const session = await getServerSession(options)
    // console.log(session)
    // const data = await getTrack(session, params.id)
    // const url = data.external_urls


    return (
        <div className="flex flex-col">
            <div className="">{params.id}</div>

            {/* <Download url={url}>
                <span>{data.name}</span>

            </Download> */}

            {/* {data.items.map(item => {
                return (

                    <Link href={`/projects/musicX/track/${item.track.id}`}>{item.track.name}
                    </Link>

                )

            })} */}
        </div >
    )
}
export default Track
