'use client'
import React from 'react'
// import { download } from '@/app/utils/musicX/download_utils'
// import { Button } from '@/components/ui/button'

function Download(props) {
	const handleClick = async () => {
		try {
			// Call the download function with the URL
			// const result = await download(props.url);
			// console.log(result)
			// const data = await result.json()
			// const response = await data.json()
			// console.log(data)

			// return response
			// Handle success or perform any other actions
		} catch (error) {
			console.error(error);
			// Handle errors if needed
		}
	};

	return (
		<>
			<div>excceeded limit</div>
			{/* <Link href={handleClick()} */}
			{/* >download</Link> */}

		</>
	)
}
export default Download
