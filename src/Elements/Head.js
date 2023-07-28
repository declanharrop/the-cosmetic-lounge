/* eslint-disable react/destructuring-assignment */
import NextHead from 'next/head';

const defaultDescription =
  'The Cosmetic Lounge, your premier destination for exceptional aesthetic treatments in Derby. Anti-wrinkle injections to smooth out fine lines and wrinkles, dermal fillers to restore volume and plumpness, chemical peels to rejuvenate your skin, or non-surgical facelifts to lift and tighten sagging skin';
const defaultOGURL = 'https://thecosmeticloungederby.co.uk';
const defaultOGImage =
  'https://thecosmeticloungederby.co.uk/img/headers/home.webp';
const defaultOGType = 'website';

const Head = (props) => (
  <NextHead>
    <meta charSet="UTF-8" />
    {props.title ? (
      <title>{props.title}</title>
    ) : (
      <title>The Cosmetic Lounge Derby Aesthetics</title>
    )}
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" sizes="192x192" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/static/favicon.ico" />
    <link rel="mask-icon" href="/static/favicon.ico" color="var(--navy)" />
    <link rel="icon" href="/favicon.ico" />
    <meta property="og:url" content={props.url || defaultOGURL} />
    {props.title ? (
      <meta property="og:title" content={props.title} />
    ) : (
      <meta
        property="og:title"
        content="The Cosmetic Lounge Derby Aesthetics"
      />
    )}
    <meta
      property="og:description"
      content={props.description || defaultDescription}
    />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:type" content={props.ogType || defaultOGType} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </NextHead>
);

export default Head;
