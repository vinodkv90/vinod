import React from 'react'

const Experience = () => {
  return (
    <section className='pt-20 bg-background'>
        <div className="container mx-auto px-3 md:max-w-[720px]">
          <h2 className='text-foreground font-dela-gothic font-normal text-lg md:text-xl text-center'>{`My Experience`}</h2>
          <div className="mt-7 gap-4">
            <div className="flex flex-wrap gap-4">
                <div className="flex items-center flex-wrap px-4 py-3 rounded-sm bg-shade w-[calc(50%-8px)] md:w-full">
                    <p className='text-foreground font-montserrat font-extrabold text-base w-full sm:flex-1 md:w-1/2'>{`Webandcrafts`}</p>
                    <p className='text-foreground font-montserrat font-bold w-full sm:w-auto md:w-1/2 sm:text-end'>{`2025 Sep - Present`}</p>
                    <p className='text-foreground font-montserrat font-bold text-sm w-full'>{`Strapi Developer`}</p>
                </div>
                <div className="flex items-center flex-wrap px-4 py-3 rounded-sm bg-shade w-[calc(50%-8px)] md:w-full">
                    <p className='text-foreground font-montserrat font-extrabold text-base w-full sm:flex-1 md:w-1/2'>{`Webandcrafts`}</p>
                    <p className='text-foreground font-montserrat font-bold w-full sm:w-auto md:w-1/2 sm:text-end'>{`2021 Dec - 2025 Sep`}</p>
                    <p className='text-foreground font-montserrat font-bold text-sm w-full'>{`UI Developer`}</p>
                </div>
                <div className="flex items-center flex-wrap px-4 py-3 rounded-sm bg-shade w-[calc(50%-8px)] md:w-full">
                    <p className='text-foreground font-montserrat font-extrabold text-base w-full sm:flex-1 md:w-1/2'>{`9Commerce`}</p>
                    <p className='text-foreground font-montserrat font-bold w-full sm:w-auto md:w-1/2 sm:text-end'>{`2021 April - 2021 Dec`}</p>
                    <p className='text-foreground font-montserrat font-bold text-sm w-full'>{`UI Developer`}</p>
                </div>
                <div className="flex items-center flex-wrap px-4 py-3 rounded-sm bg-shade w-[calc(50%-8px)] md:w-full">
                    <p className='text-foreground font-montserrat font-extrabold text-base w-full sm:flex-1 md:w-1/2'>{`eWokesoft`}</p>
                    <p className='text-foreground font-montserrat font-bold w-full sm:w-auto md:w-1/2 sm:text-end'>{`2017 Jan - 2021 April`}</p>
                    <p className='text-foreground font-montserrat font-bold text-sm w-full'>{`UI Developer`}</p>
                </div>
                <div className="flex items-center flex-wrap px-4 py-3 rounded-sm bg-shade w-[calc(50%-8px)] md:w-full">
                    <p className='text-foreground font-montserrat font-extrabold text-base w-full sm:flex-1 md:w-1/2'>{`Cynere`}</p>
                    <p className='text-foreground font-montserrat font-bold w-full sm:w-auto md:w-1/2 sm:text-end'>{`2015 July - 2016 May`}</p>
                    <p className='text-foreground font-montserrat font-bold text-sm w-full'>{`UI Developer`}</p>
                </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Experience