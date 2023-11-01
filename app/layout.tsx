

import "@/app/globals.css"

import React from 'react'
import AuthProvider from '@/app/context/AuthProvider'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import LeftSideBar from '@/components/LeftSideBar'
import { getServerSession } from "next-auth/next"
import { options } from "@/app/api/auth/[...nextauth]/options"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
export const metadata = {
  title: {
    default: 'MusicX',
    // template: `%s - ${siteConfig.name}`,
  },
  // description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {

  },
}
const MusicXLayout = async ({ children }: any) => {
  const session = await getServerSession(options)

  return (

    <html lang="en" suppressHydrationWarning className="">
      <head />
      <body
        className={cn(
          "h-screen relative   font-sans antialiased",
          fontSans.variable
        )}
      >
        <AuthProvider session={session}>
          <section className="relative p-2 grid w-full h-full  grid-rows-6 gap-2  grid-cols-[25%_minmax(75%,_1fr)] ">
            <div className='relative col-start-1 col-end-1 row-start-1 row-end-7 rounded-sm shadow-2xl '>

              <LeftSideBar />
            </div>
            <div className="relative w-full col-start-2 col-end-3 row-start-1 row-end-7 pr-2 overflow-hidden rounded-lg shadow-2xl ">
              <section className="relative w-full h-full rounded-sm">{children}</section>

            </div>
            <div className='row-start-6 row-end-7 rounded-sm col-span-full '>
              <section id="player" className='sticky bottom-0 z-10 h-full shadow-inner'></section>
            </div>


          </section>
          <TailwindIndicator />
        </AuthProvider>


      </body>
    </html>


  )
}
export default MusicXLayout
