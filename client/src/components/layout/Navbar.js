import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CreateModal from "../dashboard/CreateModal";
import Sidebar from "../layout/Sidebar";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Sidebar />

          <a href="#!" class="brand-logo center">
            <i class="material-icons">bug_report</i>BugTracker
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              {/* <i className="material-icons">{this.props.user.name.charAt(0)}</i> */}
            </li>
            <li>
              <a href="sass.html">
                <i className="material-icons">search</i>
              </a>
            </li>
            <li>
              <a href="badges.html">
                <i className="material-icons">view_module</i>
              </a>
            </li>
            <li>
              <a href="collapsible.html">
                <i className="material-icons">refresh</i>
              </a>
            </li>
            <li></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
