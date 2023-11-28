
import { GreetingTitle } from "@/components/sidemenu/GreetingTitle";
import PageHeader from "@/components/sidemenu/PageHeader";
import { PlaylistCard } from "@/components/sidemenu/PlaylistCard";
import { getUserTopItems, getCurrentUserPlaylists } from '@/utils/musicX/generic_utils'
import { Artist, Playlist } from '@/lib/types'
import { getServerSession } from "next-auth/next" //server side session fetcher
import { options } from "@/app/api/auth/[...nextauth]/options"

const MainPage = async () => {
	let playlists, items
	const session = await getServerSession(options)
	const fetchData = async (accessToken: string) => {

		const playlists = await getCurrentUserPlaylists(session.accessToken)
		const { items } = await getUserTopItems(session.accessToken, 'artists')
		return {
			playlists: playlists, items: items
		}
	}
	if (session) {
		const data = await fetchData(session?.accessToken)
		playlists = data.playlists
		items = data.items

	}

	return (
		<>
			<div className="flex-1 mx-auto overflow-y-auto rounded-lg bg-background">
				<div id="children-wrapper" className="relative transition-all duration-1000 bg-background min-h-[350px] text-foreground/80 font-serif ">
					<PageHeader />
					<div className="relative z-10 px-6">
						<GreetingTitle userName={session?.user.name} />
						<div
							className="grid mt-6 gap-y-4 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
						>
							{playlists?.items.map((playlist: Playlist) => <PlaylistCard key={playlist.id} playlist={playlist} />)}
						</div>
					</div>
					<div
						className="absolute inset-0 rounded shadow-lg bg-gradient-to-t from-foreground/20 via-transparent to-primary/80"
					>
					</div>
				</div>
				<div className="relative z-10 px-6 mt-4">
					{items ?
						<>
							<h2 className="text-2xl font-bold ">Made for you</h2>
							<div className="flex flex-wrap gap-4 mt-6">
								{items.map((item: Artist) => <div key={item.id} className="">hello</div>)}
							</div>
						</>
						: <div>Please sign in to your Spotify account </div>
					}
				</div>
			</div>
		</>
	)
}
export default MainPage