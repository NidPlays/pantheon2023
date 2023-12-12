import React from "react";
import { Helmet } from 'react-helmet-async';

export const SEO = ({ title, description, keywords, meta = [], canonicalUrl }) => {
  // limiting description to 170 characters ( SEO best practice )
  const limitedDescription = description.length > 170 ? `${description.slice(0, 167)}...` : description;
  const staticMeta = [
    { name: "author", content: "Pantheon" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
  ];

  const dynamicMeta = [
    { name: "description", content: limitedDescription },
    { name: "keywords", content: keywords },
    ...meta,
  ];

  const ogMeta = [
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://pantheon2023.nidish.xyz/" }, //change after configuring domain
    { property: "og:title", content: title },
    { property: "og:description", content: limitedDescription },
    { property: "og:image", content: "https://i.postimg.cc/tRVs1r3x/OG.png" }, //testing
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
