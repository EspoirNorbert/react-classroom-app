import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header className='centrer'>
          <h1>React Classroom App</h1>
          <nav>
              <Link to='/' >Home</Link> &nbsp;|&nbsp;
              <Link to='/about' >About</Link>
          </nav>
      </header>
    );
  }
}
