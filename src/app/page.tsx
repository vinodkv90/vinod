import { RootObject } from "@/types/home";
import { nextFetch } from "@/utils/nextFetch";
import Block, { WidgetUnion } from "./blocks";
import React from "react";

export default async function Home() {
  const { data }: RootObject = await nextFetch("/home");

  return (
    <div className="font-bimbo">
      {data?.widgets.map((widget, index) => (
        <React.Fragment key={`${widget.widgetType}-${index}`}>
          <Block widget={widget as WidgetUnion} />
        </React.Fragment>
      ))}
    </div>
  );
}
