import SpotifyProvider from "next-auth/providers/spotify";
// import { NextAuthOptions } from "next-auth";
const scopes = [
	"user-read-email",
	"playlist-read-private",
	"playlist-read-collaborative",
	"user-read-currently-playing",
	"user-modify-playback-state",
	'user-library-read',
	'user-follow-read',
	'playlist-read-private',
	'user-top-read'
].join(",")

const params = {
	scope: scopes
}
const LOGIN_URL = "https://accounts.spotify.com/authorize?" + new URLSearchParams(params).toString();


async function refreshAccessToken(token) {
	const params = new URLSearchParams()
	params.append("grant_type", "refresh_token")
	params.append("refresh_token", token.refreshToken)
	const response = await fetch("https://accounts.spotify.com/api/token", {
		method: "POST",
		headers: {
			'Authorization': 'Basic ' + (new Buffer.from(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET).toString('base64'))
		},
		body: params
	})
	const data = await response.json()
	console.log('this is the return from refreshAccessToken')
	return {
		...token,
		accessToken: data.access_token,
		refreshToken: data.refresh_token ?? token.refreshToken,
		accessTokenExpires: Date.now() + data.expires_in * 1000
	}
}


export const options = {
	providers: [
		SpotifyProvider({
			clientId: process.env.SPOTIFY_CLIENT_ID || '',
			clientSecret: process.env.SPOTIFY_CLIENT_SECRET || '',
			authorization: LOGIN_URL
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,

	callbacks: {
		async signIn({ user, account, profile }) {
			return true
		},
		async jwt({ token, account, user }) {
			// Persist the OAuth access_token to the token right after signin
			if (account) {
				token.accessToken = account.access_token
				token.refreshToken = account.refresh_token
				token.accessTokenExpires = account.expires_at
				return token
			}
			// access token has not expired
			if (token.accessTokenExpires && Date.now() < token.accessTokenExpires * 1000) {
				return token
			}

			// access token has expired
			console.log(`token has expired => `, token)
			return await refreshAccessToken(token)
		},

		async session({ session, token }) {
			// Send properties to the client, like an access_token from a provider.

			// console.log(`session from session callback before`, session)
			session.accessToken = token.accessToken
			// console.log(`session from session callback after`, session)

			return session
		}
	}

}