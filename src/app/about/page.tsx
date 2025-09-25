import { RootObject } from '@/types/home'
import { nextFetch } from '@/utils/nextFetch'
import React from 'react'
import Block from '../blocks'

type Props = {}

const page = async (props: Props) => {
  const {data}: RootObject = await nextFetch('/about');
  return (
    <>
      {
        data?.widgets.map((widget: any) => (
          <React.Fragment key={widget.widgetType}>
            <Block widget={widget} />
          </React.Fragment>
        ))
      }
    </>
  );
}

export default page