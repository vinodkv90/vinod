import { WidgetBlockType } from "@/app/blocks";

export interface BlockProps {
  widget: WidgetBase;
}

export interface WidgetBase {
  widgetType: WidgetBlockType;
  [key: string]: string; // fallback for dynamic widget props
}

// src/types/common.ts
export interface Seo {
  id?: number;
  metaTitle: string;
  metaDescription: string;
  keywords?: string;
  metaRobots?: string;
  metaViewport?: string;
  canonicalURL?: string;
  structuredData?: {
    "@context": string | null;
    "@type": string | null;
    description: string | null;
    image: string | null;
    jobTitle: string | null;
    name: string | null;
    sameAs: string[] | null;
    url: string | null;
    worksFor: {
      "@type": string | null;
      name: string | null;
    };
  };
  metaImage?: {
    id?: number;
    url: string;
    alternativeText?: string | null;
    width?: number;
    height?: number;
    caption?: string | null;
  };
  openGraph?: {
    ogTitle?: string;
    ogDescription?: string;
    ogUrl?: string;
    ogType?: "website" | "article" | "book" | "profile" | "music.song" | "music.album" | "music.playlist" | "music.radio_station" | "video.movie" | "video.episode" | "video.tv_show" | "video.other" | undefined;
    ogImage?: {
      id?: number;
      url: string;
      alternativeText?: string | null;
      width?: number;
      height?: number;
      caption?: string | null;
    };
  } | null;
}

export interface SeoData {
  title: string | undefined;
  description: string | undefined
  keywords: string | undefined
  robots: string | undefined
  alternates: {
    canonical: string | undefined
  },
  openGraph: {
    title: string | undefined
    description: string | undefined
    url: string | undefined
    type: string | undefined
    images:  [{ url: string | undefined }] | []
  },
}