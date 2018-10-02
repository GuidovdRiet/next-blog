import React, { Component } from "react";
import Head from "next/head";

// components
import About from "../components/About";

class Page extends Component {
  getPage() {
    console.log("test");
    // const page = this.props.pageData["0"];
    // const pages = {
    //   about: <About {...page} />
    // };
    // return pages[`${componentName}`];
  }

  render() {
    return (
      <>
        <Head>
          <title>Name - title</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <section>
          <h1>Test</h1>
        </section>
      </>
    );
  }
}

export default Page;
