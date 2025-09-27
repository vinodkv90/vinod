import React, { useMemo, ComponentType } from "react";
import {
    HERO_WIDGET,
    FOLLOW_WIDGET,
    ABOUT_BANNER_WIDGET,
    CONTACT_ME_WIDGET,
    MY_EXPERIENCE_WIDGET,
    MY_SKILLS_WIDGET
} from "@/resources/constants";

import Hero from "@/components/Hero";
import Follow from "@/components/Follow";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";

type WidgetBlockType =
  | typeof HERO_WIDGET
  | typeof FOLLOW_WIDGET
  | typeof ABOUT_BANNER_WIDGET
  | typeof CONTACT_ME_WIDGET
  | typeof MY_EXPERIENCE_WIDGET
  | typeof MY_SKILLS_WIDGET;

interface WidgetBase {
  widgetType: WidgetBlockType;
  [key: string]: any; // fallback for dynamic widget props
}

const Default: React.FC = () => {
  return <></>;
};

const setComponent = (widget: WidgetBase): ComponentType<any> => {
  const componentMap: Record<WidgetBlockType | "default", ComponentType<any>> = {
    [HERO_WIDGET]: Hero,
    [FOLLOW_WIDGET]: Follow,
    [ABOUT_BANNER_WIDGET]: Banner,
    [CONTACT_ME_WIDGET]: Contact,
    [MY_EXPERIENCE_WIDGET]: Experience,
    [MY_SKILLS_WIDGET]: Skills,

    default: Default,
  };

  return componentMap[widget.widgetType] || componentMap["default"];
};

interface BlockProps {
  widget: WidgetBase;
}

const Block: React.FC<BlockProps> = ({ widget }) => {
  const Widget = useMemo(() => setComponent(widget), [widget.widgetType]);
  return <Widget {...widget} />;
};

export default Block;
