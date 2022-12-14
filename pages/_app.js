import "bootstrap/dist/css/bootstrap.css";

import Head from "next/head";
import { useEffect } from "react";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        <Nav />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
