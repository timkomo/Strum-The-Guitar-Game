//sets up the reusable Navbar component
import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar text-center navbar-default">
      <h3>Click to strum on any guitar to earn a point, but don't strum on the same guitar more than once. Strum all 12 guitars, and you win!</h3>
      <h3>SCORE: {this.props.score}</h3>

      </nav>
    );
  }
}

export default Navbar;