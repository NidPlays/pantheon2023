import React from "react";
import { Helmet } from 'react-helmet-async';

export const SEO = ({ title, description, keywords, meta = [] }) => {
  const staticMeta = [
    { name: "author", content: "Pantheon" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    // Add other static meta tags here
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
    />
  );
};
