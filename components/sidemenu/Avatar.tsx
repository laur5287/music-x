'use client'
import React from "react";
import { Avatar } from "@nextui-org/react";
import { Session } from "@/lib/types";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { signIn, signOut } from "next-auth/react"
type Props = {
	session: Session
}

export default function AvatarUser({ session }: Props) {
	// console.log('Session from AvatarUser', session)
	const items = [
		{
			key: "signout",
			label: "Sign out",
		}
	];
	return (
		<>
			{!session &&

				<Button onClick={() => signIn()}>Sign in</Button>
			}

			<Dropdown>
				<DropdownTrigger>

					<Avatar showFallback src={session.user.image} />
				</DropdownTrigger>
				<DropdownMenu aria-label="Dynamic Actions" items={items}>
					{(item) => (
						<DropdownItem
							key={item.key}
							color={item.key === "signout" ? "danger" : "default"}
							className={item.key === "signout" ? "text-danger" : ""}
						>
							<Button onClick={() => signOut()}>Sign out</Button>
						</DropdownItem>
					)}
				</DropdownMenu>
			</Dropdown>
		</>
	);
}
