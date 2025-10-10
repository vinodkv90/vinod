import Button from '@/components/Button'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center min-h-[calc(100dvh-53px)] md:min-h-[calc(100dvh-66px)] text-center'>
        <div className="container mx-auto">
            <h1 className='font-dela-gothic text-6xl m-0 text-foreground'>404</h1>
            <h2 className='font-dela-gothic text-xl mt-4 mb-0 text-foreground'>Page Not Found</h2>
            {/* <Button as='a' href="/" className='w-max !capitalize mx-auto !tracking-wider mt-6' size='sm'>Return Home</Button> */}
            <Link href="/" className='btn-primary btn-sm cursor-pointer font-montserrat rounded-sm px-4 py-0 flex items-center justify-center text-xs text-white font-medium uppercase leading-[1] w-max !capitalize mx-auto !tracking-wider mt-6'>Return Home</Link>
        </div>
    </div>
  )
}