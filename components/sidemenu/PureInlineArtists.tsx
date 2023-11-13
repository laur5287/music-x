interface Props {
	artist: string;
}

export function PureInlineArtists(props: Props) {
	return (
		<>
			{
				// props.artists.map((artist, index) => (
				<>
					{props.artist}
					{/* {index === props.artists.length - 1 ? " " : ", "} */}
				</>
				// ))
			}
		</>
	)
}



