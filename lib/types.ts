
export type Session = {
	user: {
		name: string;
		email: string;
		image: string;
	};
	accessToken: string;
};
export interface Playlist {
	collaborative: boolean;
	description: string;
	external_urls: {
		spotify: string;
	};
	href: string;
	id: string;
	images: {
		url: string;
		height: number;
		width: number;
	}[];
	name: string;
	owner: {
		external_urls: {
			spotify: string;
		};
		followers: {
			href: string;
			total: number;
		};
		href: string;
		id: string;
		type: string;
		uri: string;
		display_name: string;
	};
	public: boolean;
	snapshot_id: string;
	tracks: {
		href: string;
		total: number;
	};
	type: string;
	uri: string;
}
export interface Artist {
	external_urls: {
		spotify: string;
	};
	followers: {
		href: string;
		total: number;
	};
	genres: string[];
	href: string;
	id: string;
	images: {
		url: string;
		height: number;
		width: number;
	}[];
	name: string;
	popularity: number;
	type: string;
	uri: string;
}