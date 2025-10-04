import { WidgetBlockType } from "@/app/blocks";

export interface BlockProps {
  widget: WidgetBase;
}

export interface WidgetBase {
  widgetType: WidgetBlockType;
  [key: string]: string; // fallback for dynamic widget props
}