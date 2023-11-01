'use client'
import { signIn } from "next-auth/react"

const Page = () => {
    return (
        <div className='flex items-center justify-center w-full h-screen'>
            <button className="px-8 py-2 text-lg font-bold text-white bg-green-500 rounded-full" onClick={() => signIn('spotify', { callbackUrl: "/musicX" })}>Login with spotify</button>
        </div>
    );
}

export default Page;
