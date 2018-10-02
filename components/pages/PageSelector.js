import React, { Component } from "react";
import Head from "next/head";

// components
import About from "./About";

class Page extends Component {
  constructor() {
    super();
    this.getTemplateName = this.getTemplateName.bind(this);
  }

  getPage() {
    const page = this.props["0"];
    const { template } = page;
    const componentName = this.getTemplateName(template);
    const pages = {
      about: <About {...page} />,
    };
    return pages[`${componentName}`];
  }

  getTemplateName(template) {
    const templateName = template.substr(0, template.lastIndexOf("."));
    return templateName;
  }

  render() {
    return (
      <>
        <Head>
          <title>Name - title</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <section>{this.getPage()}</section>
      </>
    );
  }
}

export default Page;
