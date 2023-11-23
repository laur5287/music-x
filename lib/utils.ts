import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}
export function formatTime(milliseconds: number) {
	// Calculate minutes and seconds
	const minutes = Math.floor(milliseconds / 1000 / 60);
	const seconds = Math.floor((milliseconds / 1000) % 60);

	// Format the time as MM:SS
	const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

	return formattedTime;
}
