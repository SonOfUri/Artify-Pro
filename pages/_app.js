import React, { useState, useEffect } from "react";
import Head from "next/head";
import Cookies from "js-cookie";
import "../styles/globals.css";

//INTERNAL IMPORT
import { Auth } from "../Components/index";

export default function App({ Component, pageProps }) {
  const [auth, setAuth] = useState(true);
  useEffect(() => {
    const storedCookieValue = Cookies.get("token");

    if (storedCookieValue) {
      setAuth(false);
    } else {
      setAuth(true);
    }
  }, []);
  return (
    <>
      <Head>
        <title>Artify+</title>
        <meta
          name="description"
          content="Artify+ Generator powered by @artify"
        />
        <link rel="shortcut icon" href={`/assets/ailogoII.png`} />
      </Head>
      {auth && <Auth />}

      <Component {...pageProps} />
    </>
  );
}
