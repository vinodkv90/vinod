import React from 'react'

interface skills {
  title: string | null;
  description: string | null;
}

interface data {
  title: string;
  skills: skills[];
}

interface SkillProps {
  component: string;
  data: data;
  widgetType: string;
}

const Skills = (props: SkillProps) => {
    const { data } = props;
  return (
    <section className='pt-20'>
        <div className="container mx-auto px-3 md:max-w-[720px]">
            <h2 className='text-foreground font-dela-gothic font-normal text-lg md:text-xl text-center'>{data?.title}</h2>
            <div className="mt-7">
                <div className="flex flex-wrap gap-2">
                    {
                        data?.skills?.length > 0 && data?.skills?.map((skill) => (
                            <div className="bg-shade text-foreground h-7 px-2.5 py-1 rounded-sm font-bold text-xs flex items-center justify-center font-montserrat" key={skill?.title}>{skill?.title}</div>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills

const skills = [
    {
        id: 1,
        name: 'Strapi',
    },
    {
        id: 2,
        name: 'Node.js',
    },
    {
        id: 3,
        name: 'MongoDB',
    },
    {
        id: 4,
        name: 'PostgreSQL',
    },
    {
        id: 5,
        name: 'React',
    },
    {
        id: 6,
        name: 'Next.js',
    },
    {
        id: 7,
        name: 'TypeScript',
    },
    {
        id: 8,
        name: 'TailwindCSS',
    },
    {
        id: 9,
        name: 'SCSS',
    },
    {
        id: 10,
        name: 'LESS',
    },
    {
        id: 11,
        name: 'JavaScript',
    },
    {
        id: 12,
        name: 'jQuery',
    },
    {
        id: 13,
        name: 'PWA',
    },
    {
        id: 14,
        name: 'Bootstrap',
    },
    {
        id: 15,
        name: 'Shadcn',
    }
]