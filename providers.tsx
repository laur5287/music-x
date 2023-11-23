"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from 'next/navigation'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import AuthProvider from '@/app/context/AuthProvider'
import { getSession } from '@/utils/musicX/getServerSession'

export interface ProvidersProps {
	children: React.ReactNode;
	themeProps?: ThemeProviderProps;
	session?: any
}
export async function getSessionData() {
	const session = await getSession();
	return {
		props: { session },
	};
}

export function Providers({ children, themeProps, session }: ProvidersProps) {
	const router = useRouter();

	return (
		<NextUIProvider navigate={router.push}>
			<NextThemesProvider {...themeProps}>
				<AuthProvider session={session}>
					{children}

				</AuthProvider>
			</NextThemesProvider>
		</NextUIProvider>
	);
}