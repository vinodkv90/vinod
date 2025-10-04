import { WidgetBlockType } from "@/app/blocks";

export interface BlockProps {
  widget: WidgetBase;
}

export interface WidgetBase {
  widgetType: WidgetBlockType;
  [key: string]: string; // fallback for dynamic widget props
}

export interface MetaImage {
  id: number | null;
  url: string | null;
  alternativeText: string | null;
  width: number | null;
  height: number | null;
  caption: string | null;
}

export interface StructuredData {
  "@context": string | null;
  "@type": string | null;
  name: string | null;
  url: string | null;
  image: string | null;
  sameAs: string[] | null;
  jobTitle: string | null;
  worksFor: {
    "@type": string | null;
    name: string | null;
  };
  description: string | null;
}

export interface OpenGraph {
  siteName: string | null;
  title: string | null;
  description: string | null;
  type: string | null;
  url: string | null;
  images: {
    url: string | null;
    width: number | null;
    height: number | null;
  }[] | null;
}

export interface SeoObject {
  title: string | null;
  description: string | null;
  keywords: string | null;
  metaImage: string | null;
  openGraph: OpenGraph;
  alternates: { canonical: string | null };
  // metaRobots: string | null;
  // structuredData: StructuredData;
  // metaViewport: string | null;
  canonicalURL: string | null;
}

export interface SeoData {
  seo: {
    canonicalURL: string | null;
    id: number | null;
    keywords: string | null;
    metaDescription: string | null;
    metaImage: {
      alternativeText: string | null;
      caption: string | null;
      height: number | null;
      id: number | null;
      url: string | null;
      width: number | null;
    };
    metaRobots: string | null;
    metaTitle: string | null;
    metaViewport: string | null;
    openGraph: {
      id: number | null;
      ogDescription: string | null;
      ogImage: {
        alternativeText: string | null;
        caption: string | null;
        height: number | null;
        id: number | null;
        url: string | null;
        width: number | null;
      }
      ogTitle: string | null;
      ogType: string | null;
      ogUrl: string | null;
    };
    structuredData: {
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
    }
  };
  widgets: [
    {
      widgetType: {
        component: string | null;
        data: {
          title: string | null;
          image: {
            alternativeText: string | null;
            caption: string | null;
            height: number | null;
            id: number | null;
            url: string | null;
            width: number | null;
          };
          description: string | null;
        };
        widgetType: string | null;
      };
    }
  ];
}