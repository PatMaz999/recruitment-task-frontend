import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Energy Mix App</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
