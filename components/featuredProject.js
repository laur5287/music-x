import Image from 'next/image'
import Link from 'next/link'
import { Icons } from '@/components/icons'
import { cn } from "@/lib/utils"
import { buttonVariants } from '@/components/ui/button'

export default function FeaturedProject({ text, title, className, summary, img, link, github }) {
    return (
        <article className={cn(' relative w-full   flex flex-col items-center justify-between   p-4 bg-muted  shadow-2xl    rounded-3xl ', className)}>
            <div className="relative flex-grow w-full rounded-3xl   h-[17rem]">
                <Link
                    href={link}

                    className='absolute top-0 z-10 w-full h-full'
                >
                </Link>
                <Image className='object-cover rounded-[2rem]' priority src={img} alt={title}
                    // height={100} width={300}
                    fill
                    placeholder='blur'

                    sizes=' 100vw '
                />
            </div>

            <div className='relative'>
                <Link className='hover:underline underline-offset-2' href={link}>
                    {/* <Image src={img} alt={title} fill={false}  /> */}
                    <h2 className='w-full my-2 text-2xl font-bold text-left md:text-4xl'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-black rounded-md dark:text-white sm:text-sm'>{summary}</p>
            </div>
            <div className='flex items-start gap-2 mt-2 '>
                <Link href={link} target='_blank'><Icons.gitHub width='2.5em' height='2.5em' /></Link>
                <Link className={buttonVariants({ variant: 'default', size: 'lg' })} href='/projects/blackjack' >Open</Link>
            </div>
        </article>
    )
}
