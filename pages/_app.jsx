import React from "react";
import "./globalstyles/global.scss";
import "./globalstyles/authForm.scss";
import "./globalstyles/gallery.css";
import { Provider } from "next-auth/client";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);
  console.log(!!Component.layout)
  return (
    <Provider session={pageProps.session}>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </Provider>
  );
}
