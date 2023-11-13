import { SideMenuItem } from "./SideMenuItem";
import { SideItemCard } from "./SideItemCard";


export function SideMenu({ userArtists, userPlaylists }: { userArtists: any, userPlaylists: any }) {
	const { items } = userPlaylists

	return (
		<>
			<div className="flex flex-col flex-1 gap-2">
				<div className="rounded-lg bg-zinc-900">
					<ul>
						<SideMenuItem href="/" >Home</SideMenuItem>
						{/* <SideMenuItem href="/search" >Search</SideMenuItem> */}
					</ul>
				</div>

				<div className="flex-1 rounded-lg bg-background">
					<ul>
						<SideMenuItem >
							Your library
						</SideMenuItem>
						<hr />
						<ul className="pl-2">
							{items.map((playlist: any) => <SideItemCard playlist={playlist} />)}
						</ul>
					</ul>
					<ul className="pl-2">
						{userArtists.artists.items.map((playlist: any) => <SideItemCard playlist={playlist} />)}
					</ul>
				</div>
			</div>
		</>
	)
}