import NavBar from "../components/navbar";
import '../styles/globals.css'
import Head from "next/head";

// template
function App({ Component, pageProps }) {
  return (
    <>
    <Head>
        <link rel="icon" href="/icons/favicon.ico" />
    </Head>
      <header>
        <NavBar />
      </header>

      <Component {...pageProps} />
    </>
  );
}

export default App;
