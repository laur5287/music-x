
import { GreetingTitle } from "@/components/sidemenu/GreetingTitle";
// import Layout from "../layouts/Layout.astro";
import { playlists, morePlaylists } from "@/lib/types";
import PageHeader from "@/components/sidemenu/PageHeader";
import { PlaylistCard } from "@/components/sidemenu/PlaylistCard";
import { PlaylistItemCard } from "@/components/sidemenu/PlaylistItemCard";

const TestPage = (props: any) => {
	console.log('this is the props from page', props)

	return (
		<>
			<div className="flex-1 mx-auto overflow-y-auto rounded-lg bg-zinc-900">
				<div id="children-wrapper" className="relative transition-all duration-1000 bg-zinc-700 min-h-[350px] text-[#134e4a] font-serif ">
					<PageHeader />
					<div className="relative z-10 px-6">
						<GreetingTitle
						// client:visible
						/>
						<div
							className="grid mt-6 gap-y-4 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
						>
							{playlists.map((playlist) => <PlaylistItemCard playlist={playlist} />)}
						</div>
					</div>
					<div
						className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80"
					>
					</div>
				</div>
				<div className="relative z-10 px-6 mt-4">
					<h2 className="text-2xl font-bold ">Made for you</h2>
					<div className="flex flex-wrap gap-4 mt-6">
						{morePlaylists.map((playlist) => <PlaylistCard playlist={playlist} />)}
					</div>
				</div>
			</div>
		</>
	)
}
export default TestPage