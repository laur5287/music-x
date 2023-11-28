'use client'
import React from "react";
import { Avatar } from "@nextui-org/react";
import { Session } from "@/lib/types";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { signIn, signOut } from "next-auth/react"
import { useSession } from "next-auth/react"


export default function AvatarUser() {
	const { data: session, status } = useSession()
	const items = [
		{
			key: "signout",
			label: "Sign out",
		}
	];
	return (
		<>
			{/* {session && session.user && status === 'authenticated' ? */}


			<Dropdown>
				<DropdownTrigger>

					<Avatar showFallback src={session?.user?.image!} />
				</DropdownTrigger>
				<DropdownMenu aria-label="Dynamic Actions" items={items}>
					{(item) => (
						<DropdownItem
							key={item.key}
							color={item.key === "signout" ? "danger" : "default"}
							className={item.key === "signout" ? "text-danger" : ""}
						>{session && session.user && status === 'authenticated' ?
							<Button onClick={() => signOut()}>Sign out</Button> :
							<Button onClick={() => signIn()}>Sign in</Button>
							}

						</DropdownItem>
					)}
				</DropdownMenu>
			</Dropdown>
			{/* <Button onClick={() => signIn()}>Sign in</Button> */}
			{/* } */}
		</>
	);
}
