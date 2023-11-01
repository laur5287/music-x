


// export const download = async ({ spotify }) => {
//     // console.log(spotify)
//     const apiUrl = 'https://spofity-downloader.p.rapidapi.com/url';
//     const queryParams = new URLSearchParams({ url: spotify });
//     const url = `${apiUrl}?${queryParams.toString()}`;
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '537cdc985dmsh0a829ce8e0f221ap179fabjsnea44b747637b',
//             'X-RapidAPI-Host': 'spofity-downloader.p.rapidapi.com'
//         }
//     };

//     try {

//         const response = await fetch(url, options);
//         const result = await response.text();
//         // const data = await result.json()
//         return result

//     } catch (error) {
//         console.error(error);
//     }
// }