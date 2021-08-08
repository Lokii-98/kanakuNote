import Layout from "../commoncomponents/layout";
import { ButtonContextProvider } from "../store/button-context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ButtonContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ButtonContextProvider>
  );
}

export default MyApp;
