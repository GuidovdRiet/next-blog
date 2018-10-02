import React, { Component } from "react";
import Link from "next/link";

class Header extends Component {
  renderNavigationMenu() {
    return (
      <>
        <Link as={`/about`} href={`/page?slug=about`}>
          <a>About</a>
        </Link>
        <Link as={`/home`} href={`/page?slug=home`}>
          <a>home</a>
        </Link>
        <Link as={`/companies`} href={`/page?slug=companies`}>
          <a>companies</a>
        </Link>
      </>
    );
  }

  render() {
    return this.renderNavigationMenu();
  }
}

export default Header;
