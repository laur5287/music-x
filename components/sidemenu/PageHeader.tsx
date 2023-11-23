import { ChevronLeft } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle'
import AvatarUser from '@/components/sidemenu/Avatar'
import { Session } from '@/lib/types';

type Props = {
	session: Session
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
				<div className="flex items-center justify-center gap-2">
					<ThemeToggle />
					<AvatarUser session={session} />

				</div>
			</div>
		</>
	)
}