import React from "react";
import "./globalstyles/global.scss";
import "./globalstyles/authForm.scss";



export default function App({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  )
}