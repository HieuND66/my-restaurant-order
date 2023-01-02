import "../styles/globals.css";
import "../styles/header.css";
import "../styles/home.css";
import "../styles/login.css";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { store } from "../stores";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  );
}
