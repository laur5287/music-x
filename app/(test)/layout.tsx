
// import "@/app/globals.css"
// import { getCurrentUserProfile } from '@/utils/musicX/generic_utils'
// import { getServerSession } from "next-auth/next"
// import { options } from "@/app/api/auth/[...nextauth]/options"
import { Listbox, ListboxSection, ListboxItem } from "@nextui-org/listbox";
import { Activity } from 'lucide-react';

export default function TestPageLayout({
	children
}: {
	children: React.ReactNode,

}) {

	const iconClasses = "text-xl text-default-500  pointer-events-none flex-shrink-0";

	return (
		<>
			<div id="TestPageLayout-wrapper" className="px-1 py-2  md:w-full max-w-[260px] border-small rounded-small border-default-200 dark:border-default-100">
				<Listbox
					aria-label="Actions"
					variant="faded"
					color="secondary"
					onAction={(key) => alert(key)}
				>
					<ListboxItem
						key='Activities'
						startContent={<Activity className={iconClasses} />}

					>Activities</ListboxItem>
					<ListboxItem key="copy">Copy link</ListboxItem>
					<ListboxItem key="edit">Edit file</ListboxItem>
					<ListboxItem key="delete" className="text-danger" color="danger">
						Delete file
					</ListboxItem>
				</Listbox>
			</div>
			{children}
		</>

	)
}