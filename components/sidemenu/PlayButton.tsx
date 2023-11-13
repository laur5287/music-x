
import { Laugh } from 'lucide-react';
export function PlayButton({ size }: { size?: 'md' | 'lg' }) {
	return (
		<>
			<span
				className="flex items-center justify-center text-black bg-green-500 rounded-full shadow-md hover:scale-105 shadow-black/40"
			// class:list={[size === "md" && "h-12 w-12", size === "lg" && "h-14 w-14"]}
			>
				<Laugh
					name="mdi:play"
				// class:list={[size === "md" && "h-8 w-8", size === "lg" && "h-10 w-10"]}
				/>
			</span>
		</>
	)
}