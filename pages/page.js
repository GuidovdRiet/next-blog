import React, { Component } from "react";
import api from "../libs/api.js";

// components
import Page from "../components/Page";

class PageTemp extends Component {
  static async getInitialProps(ctx) {
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
