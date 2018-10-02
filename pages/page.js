import React, { Component } from 'react';
import api from '../libs/api.js';

// components
import PageSelector from '../components/pages/PageSelector';

class Page extends Component {
  static async getInitialProps(ctx) {
    const { slug } = ctx.query;
    const page = await api.pages.getSingle(slug);
    return {
      page,
    };
  }

  render() {
    const { page } = this.props;
    return <PageSelector {...page} />;
  }
}

export default Page;
