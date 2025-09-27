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
import { Widget } from "@/types/home";

export type WidgetBlockType =
  | typeof HERO_WIDGET
  | typeof FOLLOW_WIDGET
  | typeof ABOUT_BANNER_WIDGET
  | typeof CONTACT_ME_WIDGET
  | typeof MY_EXPERIENCE_WIDGET
  | typeof MY_SKILLS_WIDGET;

const Default: React.FC = () => {
  return <></>;
};

export const setComponent = (
  widget: Widget
): ComponentType<Widget> => {
  const componentMap: Record<WidgetBlockType | "default", ComponentType<any>> = {
    [HERO_WIDGET]: Hero as ComponentType<any>,
    [FOLLOW_WIDGET]: Follow as ComponentType<any>,
    [ABOUT_BANNER_WIDGET]: Banner as ComponentType<any>,
    [CONTACT_ME_WIDGET]: Contact as ComponentType<any>,
    [MY_EXPERIENCE_WIDGET]: Experience as ComponentType<any>,
    [MY_SKILLS_WIDGET]: Skills as ComponentType<any>,
    default: Default,
  };

  return componentMap[widget.widgetType as keyof typeof componentMap] || componentMap["default"];
};

type BlockProps = {
  widget: Widget;
};

const Block: React.FC<BlockProps> = ({ widget }) => {
  // useMemo not really needed, but if you want:
  const WidgetComponent = useMemo(() => setComponent(widget), [widget]);
  return <WidgetComponent {...widget} />;
};

export default Block;
