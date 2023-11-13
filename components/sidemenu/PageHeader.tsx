import { ChevronLeft } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle'


interface Props {
	session: any
}
export default function PageHeader({ session }: Props) {
	return (
		<>
			<div
				className="relative z-10 flex justify-between px-6 py-4"
			>
				<a
					href="/"
					aria-label="go back to home page"
					className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-background"
				>
					<ChevronLeft name="bi:chevron-left" className="h-4 w-4 -ml-0.5" />
				</a>
				<ThemeToggle />
			</div>
		</>
	)
}