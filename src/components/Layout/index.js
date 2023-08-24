import React from "react";
import { Link } from "react-router-dom";
import { Header, Container, Divider, Icon } from "semantic-ui-react";

const Layout = ({ children }) => {
  return (
    <Container>
      <Link to="/">
        <Header as="h1">webpack-para-react</Header>
      </Link>
      {children}
      <Divider />
      <p>Hola mundo</p>
    </Container>
  );
};

export default Layout;
