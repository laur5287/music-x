
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Icons } from "@/components/icons"
import { getServerSession } from "next-auth/next"
import { options } from "@/app/api/auth/[...nextauth]/options"
import { getUserPlaylists } from '@/utils/musicX/user_utils'

const LeftSideBar = async () => {

    const session = await getServerSession(options)



    const data = await getUserPlaylists(session)


    return (
        <>
            <nav id='left-nav' className='flex flex-col w-full h-full gap-4 '>
                <div id='links' className='flex flex-col rounded-sm shadow-2xl'>
                    <Button variant='ghost' className='' asChild>
                        <Link
                            href="/"
                            className='flex justify-start gap-5 pl-1 '
                        >
                            <Icons.home className='w-5 h-5' />
                            <span className='text-lg active:font-bold'>Home</span>

                        </Link>
                    </Button>
                    <Button variant='ghost' className='' asChild>
                        <Link
                            href="/search"
                            className='flex justify-start gap-5 pl-1'

                        >
                            <Icons.search className='w-5 h-5' />
                            <span className='text-lg font-bold'>Search</span>

                        </Link>
                    </Button>

                </div>
                <div id='library' className="relative flex-1 rounded-sm shadow-2xl">
                    <div id="library-header" className=''>
                        <Button variant='ghost' onClick=''
                            className='flex w-full gap-5'
                        >
                            <Icons.library className='w-5 h-5' />
                            <span className='text-lg font-bold'>Your Library</span>
                        </Button>
                        <div id="filters" className='flex gap-2'>
                            <Button variant='ghost' size='sm'>artists</Button>
                            <Button variant='ghost' size='sm'>playlist</Button>
                        </div>
                    </div>
                    <div id="data">
                        <div className="">{session.user.name}</div>
                        {data && data.items && data.items.map(item => {
                            return (
                                <Link key={item.id} href={`/playlist/${item.id}`} className="">{item.name}</Link>
                            )
                        })}
                    </div>
                </div>
            </nav>
        </>
    )

}
export default LeftSideBar
