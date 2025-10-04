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

export const generateMetadata = async () => {
  const { data }: RootObject = await nextFetch("/home");
  const seo = data?.seo;

  console.log(data, 'data in metadata');
  if (!seo) return {};

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,
    robots: seo.metaRobots,
    alternates: {
      canonical: seo.canonicalURL,
    },
    openGraph: {
      title: seo.ogTitle || seo.metaTitle,
      description: seo.ogDescription || seo.metaDescription,
      url: seo.ogUrl || seo.canonicalURL,
      type: seo.ogType || "website",
      images: seo.openGraph?.ogImage?.url ? [{ url: seo.openGraph?.ogImage?.url }] : seo.metaImage ? [{ url: seo.metaImage.url }] : [],
    },
  };
};
