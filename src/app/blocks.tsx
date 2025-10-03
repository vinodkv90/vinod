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

import { HeroWidget } from "@/components/Hero/hero";
import { FollowWidget } from "@/components/Follow/follow";
import { BannerProps } from "@/components/Banner/banner";
import { ContactWidget } from "@/components/Contact/contact";
import { ExperienceProps } from "@/components/Experience/experience";
import { SkillProps } from "@/components/Skills/skills";

/** ---- Widget Types ---- */
export type WidgetBlockType =
  | typeof HERO_WIDGET
  | typeof FOLLOW_WIDGET
  | typeof ABOUT_BANNER_WIDGET
  | typeof CONTACT_ME_WIDGET
  | typeof MY_EXPERIENCE_WIDGET
  | typeof MY_SKILLS_WIDGET;

/** Default fallback */
export type DefaultWidget = {
  widgetType: "default";
};

/** Discriminated union for all widgets */
export type WidgetUnion =
  | (HeroWidget & { widgetType: typeof HERO_WIDGET })
  | (FollowWidget & { widgetType: typeof FOLLOW_WIDGET })
  | (BannerProps & { widgetType: typeof ABOUT_BANNER_WIDGET })
  | (ContactWidget & { widgetType: typeof CONTACT_ME_WIDGET })
  | (ExperienceProps & { widgetType: typeof MY_EXPERIENCE_WIDGET })
  | (SkillProps & { widgetType: typeof MY_SKILLS_WIDGET })
  | DefaultWidget;

const Default: React.FC = () => <></>;

/** Map widgetType → component with proper props */
const componentMap = {
  [HERO_WIDGET]: Hero,
  [FOLLOW_WIDGET]: Follow,
  [ABOUT_BANNER_WIDGET]: Banner,
  [CONTACT_ME_WIDGET]: Contact,
  [MY_EXPERIENCE_WIDGET]: Experience,
  [MY_SKILLS_WIDGET]: Skills,
  default: Default,
} as const;

const setComponent = (widget: WidgetUnion): ComponentType<WidgetUnion> => {
  return (componentMap[widget.widgetType] || componentMap.default) as ComponentType<WidgetUnion>;
};

const Block: React.FC<{ widget: WidgetUnion }> = ({ widget }) => {
  const Widget = useMemo(() => setComponent(widget), [widget]);
  return <Widget {...widget} />;
};

export default Block;
