import { RootObject } from "@/types/home";
import { nextFetch } from "@/utils/nextFetch";
import Block, { WidgetUnion } from "./blocks";
import React from "react";
import { Metadata } from "next";

export default async function Home() {
  const { data }: RootObject = await nextFetch("/home") || {};

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

export const generateMetadata = async (): Promise<Metadata> => {
  const { data }: RootObject = await nextFetch("/home") || {};
  const seo = data?.seo;

  if (!seo) return {};

  const { openGraph } = seo || {};

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,
    robots: seo.metaRobots,
    alternates: {
      canonical: seo.canonicalURL,
    },
    openGraph: {
      title: openGraph?.ogTitle || seo.metaTitle,
      description: openGraph?.ogDescription || seo.metaDescription,
      url: openGraph?.ogUrl || seo.canonicalURL,
      type: openGraph?.ogType || "website",
      images: openGraph?.ogImage?.url ? [{ url: openGraph?.ogImage?.url }] : seo.metaImage ? [{ url: seo.metaImage.url }] : [],
    },
  };
};
