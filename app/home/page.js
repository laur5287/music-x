'use client'
import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'
import { signIn, signOut } from "next-auth/react"
import { useSession } from "next-auth/react"


const Home = () => {
    const { data: session } = useSession()

    if (session) {
        return (
            <>
                <p className="">
                    <span className="">Signed in as: </span>
                    <span>
                        {session.user.email}
                    </span>

                </p>
                <Button onClick={() => signOut()}>Sign out</Button>
            </>
        )
    }
    return (
        <>
            Not signed in <br />
            <Button onClick={() => signIn()}>Sign in</Button>
        </>
    )
}
export default Home
