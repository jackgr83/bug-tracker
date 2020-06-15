import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CreateModal from '../dashboard/CreateModal';

class Navbar extends Component {
  render() {
    const { user } = this.props.auth;
    return (     
      <div className="navbar-fixed">
        <nav className="nav-wrapper white">
          <div className="container">
            
            <Link
              to="/dashboard"
              style={{
                fontFamily: "monospace",
                
              }}
              className="col s5 brand-logo left black-text"
            >
              Home
            </Link>
            
            <ul className="right">
              <li>
                <CreateModal />
              </li>
              <li>
                <button className='btn btn-floating gray lighten-1'>{user.name.charAt(0)}</button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

Navbar.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Navbar);

