import React from 'react'
import Button from '../Button'
import Icon from '../Icon'

export interface FollowLink {
  url: string;
  icon: "github" | "linkedin" | "instagram" | "youtube"; // restrict to known icons
  name: string | null;
  external: boolean;
}

export interface FollowWidgetData {
  title: string;
  links: FollowLink[];
}

export interface FollowWidget {
  widgetType: "followWidget";
  data: FollowWidgetData;
  component: "contact.follow";
}


const Follow = (props: FollowWidget) => {
  const { data } = props;
  const links = data?.links;
  return (
    <section className='section'>
        <div className='container mx-auto px-3 md:max-w-[720px]'>
            <h2 className={`text-foreground font-normal text-lg md:text-xl font-dela-gothic`}>{data?.title}</h2>
            <div className='flex flex-wrap gap-2 mt-7'>
              {
                links?.length > 0 && links?.map((icon) => (
                  <Button as='a' href={icon.url} target='_blank' rel='noopener noreferrer' variant='blank' size="sm" className='!capitalize !px-3 w-[calc(50%-6px)] sm:w-[calc(25%-6px)] !text-foreground' key={icon?.icon}>
                    <Icon icon={icon?.icon} size={16} color='currentColor' className='mr-1 !block min-w-4' /> {icon?.name}
                  </Button>
                ))
              }
            </div>
        </div>
    </section>
  )
}

export default Follow
