import React, { Component } from "react";
import fetch from "isomorphic-unfetch";

// components
import Page from "../components/Page";

class PageTemp extends Component {
  async getInitialProps(ctx) {
    const { slug } = ctx.query;
    const page = await api.pages.getSingle(slug);
    return {
      page
    };
  }
  render() {
    const { page } = this.props;
    return <Page {...page} />;
  }
}

export default PageTemp;
