import React, { useMemo, ComponentType } from "react";
import {
  HERO_WIDGET,
  FOLLOW_WIDGET,
  ABOUT_BANNER_WIDGET,
  CONTACT_ME_WIDGET,
  MY_EXPERIENCE_WIDGET,
  MY_SKILLS_WIDGET,
} from "@/resources/constants";

import Hero from "@/components/Hero";
import Follow from "@/components/Follow";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";

export type WidgetBlockType =
  | typeof HERO_WIDGET
  | typeof FOLLOW_WIDGET
  | typeof ABOUT_BANNER_WIDGET
  | typeof CONTACT_ME_WIDGET
  | typeof MY_EXPERIENCE_WIDGET
  | typeof MY_SKILLS_WIDGET;

export type DefaultWidget = {
  widgetType: "default";
  [key: string]: unknown;
};

interface WidgetBase {
  widgetType: WidgetBlockType;
  [key: string]: unknown;
}

const Default: React.FC = () => <></>;

type WidgetComponentMap = Record<WidgetBlockType | "default", ComponentType<WidgetBase>>;

const componentMap: WidgetComponentMap = {
  [HERO_WIDGET]: Hero,
  [FOLLOW_WIDGET]: Follow,
  [ABOUT_BANNER_WIDGET]: Banner,
  [CONTACT_ME_WIDGET]: Contact,
  [MY_EXPERIENCE_WIDGET]: Experience,
  [MY_SKILLS_WIDGET]: Skills,
  default: Default,
};

const setComponent = (widget: WidgetBase): ComponentType<WidgetBase> => {
  return componentMap[widget.widgetType] || componentMap.default;
};

const Block: React.FC<{ widget: WidgetBase }> = ({ widget }) => {
  const Widget = useMemo(() => setComponent(widget), [widget]);
  return <Widget {...widget} />;
};

export default Block;
