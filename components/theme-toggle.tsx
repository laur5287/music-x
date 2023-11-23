"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from 'react'
import { Button } from "@nextui-org/button";
import { Icons } from "@/components/icons"

export function ThemeToggle() {
	const [mounted, setMounted] = useState(false)
	const { setTheme, theme } = useTheme()

	return (
		<Button
			variant="shadow"
			size="sm"
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}
		>
			<Icons.sun className="transition-all scale-100 rotate-0 dark:-rotate-90 dark:scale-0" />
			<Icons.moon className="absolute transition-all scale-0 rotate-90 dark:rotate-0 dark:scale-100" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	)
}
