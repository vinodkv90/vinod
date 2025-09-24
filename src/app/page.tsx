import { RootObject, Widget } from "@/types/home";
import { nextFetch } from "@/utils/nextFetch";
import Block from "./blocks";
import React from "react";

export default async function Home() {
  const {data}: RootObject = await nextFetch('/home');
  return (
    <div className="font-bimbo">
      {
        data?.widgets.map((widget: any) => (
          <React.Fragment key={widget.widgetType}>
            <Block widget={widget} />
          </React.Fragment>
        ))
      }
    </div>
  );
}
