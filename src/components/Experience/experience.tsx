import React from 'react'

interface ExperienceData {
  title: string;
  duration: string;
  designation: string;
}

interface data {
  title: string;
  experiences: ExperienceData[];
}

interface ExperienceProps {
  component: string;
  data: data;
  widgetType: string;
}

const Experience = (props: ExperienceProps) => {
  const {data} = props;
  return (
    <section className='pt-20 bg-background'>
        <div className="container mx-auto px-3 md:max-w-[720px]">
          <h2 className='text-foreground font-dela-gothic font-normal text-lg md:text-xl text-center'>{data?.title}</h2>
          <div className="mt-7 gap-4">
            <div className="flex flex-wrap gap-4">
              {
                data?.experiences?.length > 0 && data?.experiences?.map((item: ExperienceData, index: number) => (
                  <div key={index} className="flex items-center flex-wrap px-4 py-3 rounded-sm bg-shade w-[calc(50%-8px)] md:w-full">
                    <p className='text-foreground font-montserrat font-extrabold text-base w-full sm:flex-1 md:w-1/2'>{item.title}</p>
                    <p className='text-foreground font-montserrat font-bold w-full sm:w-auto md:w-1/2 sm:text-end'>{item.duration}</p>
                    <p className='text-foreground font-montserrat font-bold text-sm w-full'>{item.designation}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
    </section>
  )
}

export default Experience