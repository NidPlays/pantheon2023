import React from "react";
import { Helmet } from 'react-helmet-async';

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

  const allMeta = [...staticMeta, ...dynamicMeta];

  return (
    <Helmet
      title={title}
      htmlAttributes={{ lang: "en" }}
      meta={allMeta}
      link={canonicalUrl ? [{ rel: "canonical", href: canonicalUrl }] : []}
    />
  );
};
