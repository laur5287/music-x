
import { GreetingTitle } from "@/components/sidemenu/GreetingTitle";
// import PageHeader from "@/components/sidemenu/PageHeader";
import { PlaylistCard } from "@/components/sidemenu/PlaylistCard";
// import { PlaylistItemCard } from "@/components/sidemenu/PlaylistItemCard";
import { getSession } from '@/utils/musicX/getServerSession'
import { getUserTopItems, getCurrentUserPlaylists } from '@/utils/musicX/generic_utils'
import { Artist, Playlist } from '@/lib/types'

const TestPage = async (props: any) => {

	const session = await getSession()
	const { items } = await getUserTopItems(session.accessToken, 'artists')
	const playlists = await getCurrentUserPlaylists(session.accessToken)



	return (
		<>
			<div className="flex-1 mx-auto overflow-y-auto rounded-lg bg-background">
				<div id="children-wrapper" className="relative transition-all duration-1000 bg-background min-h-[350px] text-foreground/80 font-serif ">
					{/* <PageHeader session={session} /> */}
					<div className="relative z-10 px-6">
						<GreetingTitle userName={session.user.name} />
						<div
							className="grid mt-6 gap-y-4 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
						>
							{playlists.items.map((playlist: Playlist) => <PlaylistCard key={playlist.id} playlist={playlist} />)}
						</div>
					</div>
					<div
						className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 "
					>
					</div>
				</div>
				<div className="relative z-10 px-6 mt-4">
					<h2 className="text-2xl font-bold ">Made for you</h2>
					{/* <div className="flex flex-wrap gap-4 mt-6">
						{items.map((item: Artist) => <PlaylistItemCard artist={item} />)}
					</div> */}
				</div>
			</div>
		</>
	)
}
export default TestPage