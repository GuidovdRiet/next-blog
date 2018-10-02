import React, { Component } from "react";
import styled from "styled-components";

class About extends Component {
  render() {
    return <Title>{this.props.title.rendered}</Title>;
  }
}

export default About;

const Title = styled.h1`
  color: red;
`;
