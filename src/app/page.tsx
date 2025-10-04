import { RootObject } from "@/types/home";
import { nextFetch } from "@/utils/nextFetch";
import Block, { WidgetUnion } from "./blocks";
import React from "react";
import { Metadata } from "next";

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

export const generateMetadata = async (): Promise<Metadata> => {
  const { data }: RootObject = await nextFetch("/home");
  const seo = data?.seo;

  console.log(data, 'data in metadata');
  if (!seo) return {};

  const og = seo.openGraph;

  const validOgTypes = [
    "website",
    "article",
    "book",
    "profile",
    "music.song",
    "music.album",
    "music.playlist",
    "music.radio_station",
    "video.movie",
    "video.episode",
    "video.tv_show",
    "video.other",
  ] as const;

  const ogType = validOgTypes.includes(og?.ogType as any)
    ? (og?.ogType as (typeof validOgTypes)[number])
    : "website";

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,
    robots: seo.metaRobots,
    alternates: {
      canonical: seo.canonicalURL,
    },
    openGraph: {
      title: og?.ogTitle || seo.metaTitle,
      description: og?.ogDescription || seo.metaDescription,
      url: og?.ogUrl || seo.canonicalURL,
      type: ogType, // ✅ Now fully type-safe
      images:
        og?.ogImage?.url
          ? [{ url: og.ogImage.url }]
          : seo.metaImage
          ? [{ url: seo.metaImage.url }]
          : [],
    },
  };
};
