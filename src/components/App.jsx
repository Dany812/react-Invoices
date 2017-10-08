import React, { Component, PropTypes } from 'react';
import { Grid, Nav, NavItem, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class App extends Component {
  render() {
    const navigation = (
      <Navbar staticTop={true}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Invoice App</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <LinkContainer to="/invoices">
            <NavItem eventKey={0} title="invoices">
              Invoices
            </NavItem>
          </LinkContainer>
          <LinkContainer to="/products">
            <NavItem eventKey={1} title="Products">
              Products
            </NavItem>
          </LinkContainer>
          <LinkContainer to="/customers">
            <NavItem eventKey={2} title="Customers">
              Customers
            </NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
    );
    return (
      <Grid>
        {navigation}
        {this.props.children}
      </Grid>
    );
  }
}
App.propTypes = {
  children: PropTypes.element.isRequired
};
