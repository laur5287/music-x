
'use client'
import { useSession } from "next-auth/react"
import { Card, CardBody, CardHeader, Image, Skeleton } from "@nextui-org/react";
import { getPlaylistItems, getPlaylistCoverImage } from '@/utils/musicX/generic_utils'
import { useEffect, useState } from "react";
import PlaylistTable from '@/app/playlist/PlaylistTable'

const PlaylistPage = ({ params }: { params: { id: string } }) => {
	const { data: session } = useSession();
	const [playlist, setPlaylist] = useState<any>(null);
	const [coverImage, setCoverImage] = useState<any>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getPlaylistItems((session as any).accessToken, params.id);
				setPlaylist(data);
				const coverImageData = await getPlaylistCoverImage((session as any).accessToken, params.id)
				setCoverImage(coverImageData)

			} catch (error) {
				console.error('Error fetching playlist:', error);
			}
		};

		if (session && (session as any).accessToken) {
			fetchData();
		}
	}, [params.id, session]);
	useEffect(() => {
		console.log(playlist, coverImage)
	}, [playlist, coverImage])


	return (
		<>
			{playlist && coverImage &&
				<div className="relative w-full h-full">
					<div className="absolute w-full h-full indent-0 "
						style={{
							backgroundImage: `url(${coverImage[0].url})`,
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
							filter: 'blur(3px)',
						}}
					/>

					<Card className="w-full bg-background/40" id="card">



						<CardHeader className="flex flex-col items-center gap-8 px-6 md:flex-row md:items-stretch">
							<div className="flex-none h-52 w-52">
								<Image
									removeWrapper
									alt="Card background"
									src={coverImage.url}
								/>
							</div>
							<div className="flex flex-col justify-between">
								<div className="">Artist</div>
								<div>
									<h1 className="block font-bold title-clamp">
										{/* {artist.name} */}
										{/* <span>{artist.genres[0]}</span> */}
									</h1>
								</div>
								<div className="flex items-end flex-1">
									<div className="text-sm">
										{/* <InlineArtists artists={playlist?.artists || []} /> */}
										<div className="mt-1">
											{/* <span className="font-semibold">{artist.popularity}</span>, 83 musics, */}
											{/* <span className="">about 3h 15min</span > */}
										</div>
									</div>
								</div>
							</div>
						</CardHeader>
						<CardBody className="bg-background/40">

							<PlaylistTable tracks={playlist} />
						</CardBody>
					</Card >
				</div >
			}
		</>
	)
}
export default PlaylistPage
