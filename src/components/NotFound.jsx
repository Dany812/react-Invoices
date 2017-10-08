import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NotFound extends Component {
  componentDidMount() {
    document.title = 'Not Found';
  }
  render() {
    return (
      <div className="container">
        Page not found. <Link to="/">Home</Link>
      </div>
    );
  }
}
