
// import Icon from "astro-icon";
import { Laugh } from 'lucide-react';
import { Children } from 'react';

type Props = {
	children: string,
	href?: string;

};

export function SideMenuItem({ children }: Props) {
	return (
		<li>
			<div
				// href={href}	
				className="flex gap-4  py-3.5 px-5 font-semibold transition-all duration-300"
			>
				<Laugh className="w-6 h-6" />
				{children}
			</div>
		</li>

	)
}
