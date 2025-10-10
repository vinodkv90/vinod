import Button from '@/components/Button'
 
export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center min-h-[calc(100dvh-53px)] md:min-h-[calc(100dvh-66px)] text-center'>
        <div className="container mx-auto">
            <h1 className='font-dela-gothic text-6xl m-0 text-foreground'>404</h1>
            <h2 className='font-dela-gothic text-xl mt-4 mb-0 text-foreground'>Page Not Found</h2>
            <Button as='a' href="/" className='w-max !capitalize mx-auto !tracking-wider mt-6' size='sm'>Return Home</Button>
        </div>
    </div>
  )
}