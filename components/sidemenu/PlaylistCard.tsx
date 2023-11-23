import type { Playlist } from "@/lib/types";
// import { PlayButton } from "@/components/sidemenu/PlayButton";
import { PureInlineArtists } from "@/components/sidemenu/PureInlineArtists";
interface Props {
	playlist: Playlist;
}

export function PlaylistCard({ playlist }: Props) {
	return (
		<>
			<a
				href={`/playlist/${playlist.id}`}
				className="relative flex-col items-center gap-5 p-4 overflow-hidden transition-all duration-300 rounded-md shadow-lg outline-none playlist-card group hover:shadow-xl bg-zinc-500/5 hover:bg-zinc-500/20 focus:bg-zinc-500/20"
			>
				<div className="w-40">
					<div className="relative flex-none w-full h-40 mx-auto shadow-lg group">
						<img
							src={playlist.images[0].url}
							alt={playlist.name}
							className="object-cover h-full w-full rounded-md shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]"
						/>
						<div
							className="absolute transition-all translate-y-4 opacity-0 right-2 bottom-2 group-hover:translate-y-0 group-hover:opacity-100"
						>
							{/* <PlayButton /> */}
						</div>
					</div>
					<div className="pt-2">
						<div
							className="block font-bold truncate"
						>
							{playlist.name}
						</div>
						<div className="text-xs text-gray-400">
							<PureInlineArtists artist={playlist.description} />
						</div>
					</div >
				</div >
			</a >

		</>
	)
}