import type { Playlist } from "@/lib/types";
import { PlayButton } from "@/components/sidemenu/PlayButton";
import { Artist } from '@/lib/types'

interface Props {
	artist: Artist
}
export function PlaylistItemCard({ artist }: Props) {
	return (
		<>
			<a
				href={`/playlist/${artist.name}`}
				className="relative flex items-center gap-5 overflow-hidden transition-all duration-300 rounded-md shadow-lg outline-none playlist-item group hover:shadow-xl bg-zinc-500/30 hover:bg-zinc-500/50 focus:bg-zinc-500/50"
			// data-color={playlist.color.dark}
			// transition:name=`playlist ${playlist.id} box`
			>
				<div className="w-20 h-20">
					<img
						src={artist.images[0].url}
						alt={artist.name}
						className="object-cover h-full w-full shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]"
					/>
				</div>
				<div className="block font-bold">
					{artist.name}
				</div >
				<div
					className={"absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"}
				>
					<PlayButton />
				</div >
			</a >
		</>
	)
}