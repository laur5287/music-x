import { ChevronLeft } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle'
import AvatarUser from '@/components/sidemenu/Avatar'

export default async function PageHeader() {
	return (
		<>
			<div
				className="relative z-10 flex px-6 py-4"
			>
				<a
					href="/"
					aria-label="go back to home page"
					className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-background"
				>
					<ChevronLeft name="bi:chevron-left" className="h-4 w-4 -ml-0.5" />
				</a>
				<h1 className="flex items-center justify-center text-2xl grow">Spotify whit a<span className="text-3xl font-bold font-sherif text-yellow">&nbsp;twist</span></h1>
				<div className="flex items-center justify-center gap-2">
					<ThemeToggle />
					<AvatarUser />

				</div>
			</div>
		</>
	)
}