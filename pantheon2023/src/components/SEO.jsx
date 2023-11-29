import React from "react";
import { Helmet } from 'react-helmet-async';
import OGImage from "../assets/OG.png";

export const SEO = ({ title, description, keywords, meta = [], canonicalUrl }) => {
  const staticMeta = [
    { name: "author", content: "Pantheon" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
  ];

  const dynamicMeta = [
    { name: `description`, content: description },
    { name: "keywords", content: keywords },
    ...meta,
  ];

  const ogMeta = [
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://pantheon2023.nidish.xyz/" }, //change after configuring domain
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: OGImage },
  ];

  const allMeta = [...staticMeta, ...dynamicMeta , ...ogMeta];

  return (
    <Helmet
      title={title}
      htmlAttributes={{ lang: "en" }}
      meta={allMeta}
      link={canonicalUrl ? [{ rel: "canonical", href: canonicalUrl }] : []}
    />
  );
};
