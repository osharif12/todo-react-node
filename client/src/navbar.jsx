import React, { Component } from "react";

// stateless functional component
// you need to add props in the argument, react will pass this in the function during runtime

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar <span className="badge badge-pill badge-secondary">-bar</span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
