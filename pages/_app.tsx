import "../styles/index.css";
import type { AppProps } from "next/app";
import useLoadingPage from "../logics/loading";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  useLoadingPage();

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
