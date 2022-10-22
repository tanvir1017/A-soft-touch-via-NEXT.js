import Head from "next/head";

export default function Meta({ title, keywords, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Head>
  );
}

Meta.defaultProps = {
  title: "Mastering in next.js",
  keywords: "Next.js, react-frameWork, basic-to-advanced, Beginner-level",
  description: "There are some vital description for SEO next s",
};
