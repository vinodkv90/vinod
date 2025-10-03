import { RootObject } from "@/types/home";
import { nextFetch } from "@/utils/nextFetch";
import Block from "./blocks";
import React from "react";
import type { WidgetBase } from "./blocks";

export default async function Home() {
  const { data }: RootObject = await nextFetch("/home");

  return (
    <div className="font-bimbo">
      {data?.widgets.map((widget: WidgetBase) => (
        <React.Fragment key={widget.widgetType}>
          <Block widget={widget} />
        </React.Fragment>
      ))}
    </div>
  );
}
