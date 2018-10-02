import "isomorphic-fetch";

const baseUrl = "http://headless.consumentenwebsite.nl/wp-json/wp/v2";

const api = {
  companies: {
    async getList() {
      const response = await fetch(`${baseUrl}/company`);
      const data = await response.json();
      return data;
    },
    async getSingle(slug) {
      const response = await fetch(`${baseUrl}/company?slug=${slug}`);
      const data = await response.json();
      return data;
    }
  },
  pages: {
    async getList() {
      const response = await fetch(`${baseUrl}/pages`);
      const data = await response.json();
      return data;
    },
    async getSingle(slug) {
      const response = await fetch(`${baseUrl}/pages?slug=${slug}`);
      const data = await response.json();
      return data;
    }
  }
};

export default api;
