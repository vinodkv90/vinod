export const dynamic = 'force-dynamic';

import { RootObject } from '@/types/home'
import { nextFetch } from '@/utils/nextFetch'
import React from 'react'
import Block, { WidgetUnion } from '../blocks'

const page = async () => {
  const {data}: RootObject = await nextFetch('/about');
  return (
    <>
      {
        data?.widgets.map((widget) => (
          <React.Fragment key={widget.widgetType}>
            <Block widget={widget as WidgetUnion} />
          </React.Fragment>
        ))
      }
    </>
  );
}

export default page