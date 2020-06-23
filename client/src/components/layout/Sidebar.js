import React, { Component } from "react";
import { push as Menu } from "react-burger-menu";

class Sidebar extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">
          Profile
        </a>
        <a id="about" className="menu-item" href="/board">
          Board
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        <a onClick={this.showSettings} className="menu-item--small" href="">
          Project Settings
        </a>
      </Menu>
    );
  }
}

export default Sidebar;
