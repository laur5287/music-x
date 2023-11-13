
interface Props {
	artists: string[];
}

export default function InlineArtists(props: Props) {
	return (
		<>
			{
				props.artists.map((artist: any, index: number) => {
					return (
						<>
							<a href='/' className="hover:underline">
								{artist}
							</a>
							<span className="text-gray-300">
								{index === props.artists.length - 1 ? " " : ", "}
							</span>
						</>
					);
				})
			}

		</>
	)
}