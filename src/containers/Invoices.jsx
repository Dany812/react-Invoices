import React, { Component } from 'react';

export default class Invoices extends Component {
  componentDidMount() {
    document.title = 'Invoices';
  }
  render() {
    return (
      <div>
        <h3>Invoices</h3>
      </div>
    );
  }
}
