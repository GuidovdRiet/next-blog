import App, { Container } from "next/app";
import React from "react";
import withNProgress from "next-nprogress";
import NProgressStyles from "next-nprogress/styles";
import fetch from "isomorphic-unfetch";

// components
import Header from "../components/Header";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps)
      pageProps = await Component.getInitialProps(ctx);

    return {
      pageProps
    };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <NProgressStyles color="#29d" spinner={false} />
        <Header />
        <Component {...pageProps} />
      </Container>
    );
  }
}

const msDelay = 200;
const configOptions = { trickleSpeed: 50 };
export default withNProgress(msDelay, configOptions)(MyApp);
