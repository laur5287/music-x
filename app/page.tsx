import Image from 'next/image'
import { signIn, signOut } from "next-auth/react"
import { useSession } from "next-auth/react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="">this is a section</section>
    </main>
  )
}
