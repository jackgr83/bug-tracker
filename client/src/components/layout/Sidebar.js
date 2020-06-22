import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";

export default class Sidebar extends Component {
  render() {
    return (
      <Menu>
        <a className="menu-item" href="/">
          Account
        </a>

        <a className="menu-item" href="/burgers">
          Projects
        </a>

        <a className="menu-item" href="/pizzas">
          Bugs
        </a>

        <a className="menu-item" href="/desserts">
          Logout
        </a>
      </Menu>
    );
  }
}
