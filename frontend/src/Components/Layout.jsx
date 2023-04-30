import React from "react";
import { Container } from "react-bootstrap";

const Layout = ({ children }) => {
  return (
    <main className="py-3">
      <Container>{children}</Container>
    </main>
  );
};

export default Layout;
