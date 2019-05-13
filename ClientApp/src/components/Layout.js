import React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';

export default props => (
  <div>
        <NavMenu />
        <Container style={{
            maxWidth: 100 + "%",
            padding: 0,
        }}>
      {props.children}
    </Container>
    <nav class="navbar fixed-bottom navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Fixed bottom</a>
    </nav>
  </div>
);
