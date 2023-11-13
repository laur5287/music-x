
import { Laugh } from 'lucide-react';
import type { Playlist } from "@/lib/types"
import InlineArtists from "./InlineArtists";
import { PlayButton } from "./PlayButton";
import { PureInlineArtists } from "./PureInlineArtists";

interface Props {
	playlist?: Playlist;
}


export function SideItemCard({ playlist }: Props) {
	return (
		<>
			{!playlist && <div className="">no playlist</div>}

			{playlist &&
				<a
					href={`/playlist/${playlist?.id}`}
					className="relative flex items-center gap-5 p-2 overflow-hidden rounded-md shadow-lg outline-none playlist-item group hover:shadow-xl hover:bg-background/10 focus:bg-background/50"
				>
					<div className="flex-none w-12 h-12">
						<img
							src={playlist?.images[0].url}
							alt={playlist?.description}
							className="object-cover rounded h-full w-full shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]"
						/>
					</div>
					<div className="flex flex-col flex-auto truncate">
						<div className="flex-none w-full font-semibold truncate">
							{playlist?.name}
						</div>
						<div className="flex-1 text-sm text-gray-400 truncate">{playlist.type}</div>
					</div>
				</a>
			}

		</>
	)

}
