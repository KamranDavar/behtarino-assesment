import "../styles/globals.css";
import "../styles/nprogress.css";
import type { AppProps } from "next/app";
import useLoadingPage from "../logics/loading";

function MyApp({ Component, pageProps }: AppProps) {
  useLoadingPage();

  return <Component {...pageProps} />;
}

export default MyApp;
