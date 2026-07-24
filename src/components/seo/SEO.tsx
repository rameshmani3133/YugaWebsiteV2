import { Helmet } from "react-helmet-async";

import {
  SITE,
  DEFAULT_SEO,
  IMAGES,
} from "../../config";

type SEOProps = {

  title?: string;

  description?: string;

  keywords?: string;

  image?: string;

  url?: string;

  noIndex?: boolean;

};

export default function SEO({

  title,

  description,

  keywords,

  image,

  url,

  noIndex = false,

}: SEOProps) {

  const pageTitle =
    title
      ? `${title} | ${SITE.name}`
      : DEFAULT_SEO.title;

  const pageDescription =
    description ??
    DEFAULT_SEO.description;

  const pageKeywords =
    keywords ??
    DEFAULT_SEO.keywords;

  const pageImage =
    image ??
    `${SITE.website.url}${IMAGES.hero}`;

  const canonical =
    url ??
    SITE.website.url;
      return (

    <Helmet>

      <title>

        {pageTitle}

      </title>

      <meta
        name="description"
        content={pageDescription}
      />

      <meta
        name="keywords"
        content={pageKeywords}
      />

      <meta
        name="author"
        content={DEFAULT_SEO.author}
      />

      <meta
        name="robots"
        content={
          noIndex
            ? "noindex,nofollow"
            : DEFAULT_SEO.robots
        }
      />

      <link
        rel="canonical"
        href={canonical}
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:title"
        content={pageTitle}
      />

      <meta
        property="og:description"
        content={pageDescription}
      />

      <meta
        property="og:image"
        content={pageImage}
      />

      <meta
        property="og:url"
        content={canonical}
      />

      <meta
        property="og:site_name"
        content={SITE.name}
      />

      <meta
        property="og:locale"
        content={DEFAULT_SEO.locale}
      />
            <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={pageTitle}
      />

      <meta
        name="twitter:description"
        content={pageDescription}
      />

      <meta
        name="twitter:image"
        content={pageImage}
      />

    </Helmet>

  );

}