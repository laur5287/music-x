'use client'
import { useSession } from "next-auth/react"
import { Card, CardBody, CardHeader, Image, Skeleton } from "@nextui-org/react";
import { getArtist, getArtistsTopTracks } from '@/utils/musicX/generic_utils'
import { useEffect, useState } from "react";
import ArtistTable from '@/app/artist/ArtistTable'

const ArtistPage = ({ params }: { params: { id: string } }) => {
	const { data: session } = useSession();
	const [artist, setArtist] = useState<any>(null);
	const [tracks, setTracks] = useState<any>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const artistData = await getArtist(params.id, (session as any).accessToken);
				const tracksData = await getArtistsTopTracks((session as any).accessToken, params.id);
				setArtist(artistData);
				setTracks(tracksData);

			} catch (error) {
				console.error('Error fetching artist:', error);
			}
		};

		if (session && (session as any).accessToken) {
			fetchData();
		}
	}, [params.id, session]);
	useEffect(() => {
		console.log(artist, tracks)
	}, [artist, tracks])


	return (
		<>
			{artist &&
				<div className="relative w-full h-full">
					<div className="absolute w-full h-full indent-0 "
						style={{
							backgroundImage: `url(${artist.images[0].url})`,
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
							filter: 'blur(4px)',
						}}
					/>
					<Card className="w-full bg-transparent" id="card">
						<CardHeader className="flex flex-col items-center gap-8 px-6 md:flex-row md:items-stretch">
							<div className="flex-none h-52 w-52">
								<Image
									removeWrapper
									alt="Card background"
									src={artist.images[0].url}
								/>
							</div>
							<div className="flex flex-col justify-between">
								<div className="">Artist</div>
								<div>
									<h1 className="block font-bold title-clamp">
										{artist.name}
									</h1>
								</div>
								<div className="flex items-end flex-1">
									<div className="text-sm">
										{/* <InlineArtists artists={playlist?.artists || []} /> */}
										<div className="mt-1">
											<span className="font-semibold">Popularity: {artist.popularity}</span>, 83 musics,
											<span className="">about 3h 15min</span >
										</div>
									</div>
								</div>
							</div>
						</CardHeader>
						<CardBody className=
							'bg-background/40'
						>
							<ArtistTable tracks={tracks} />
						</CardBody>
					</Card >
				</div >
			}
		</>
	)
}
export default ArtistPage