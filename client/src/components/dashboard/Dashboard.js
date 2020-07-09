import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import Board from "../dashboard/Board";
import { getBugs } from "../../actions/bugActions";
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import axios from 'axios';
import { Switch, Route, withRouter } from "react-router";
import CreateModal from "./CreateModal";

class Dashboard extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  componentDidMount() {
    this.props.getBugs();
  };

  onDeleteClick = (id) => {
    // this.props.deleteBug(id);
    console.log(id);
    axios
      .delete(`api/bugs/delete/${id}`)
      .then(     
          (response) => {
          console.log(response);
          },
          (error) => {
          console.log(error);
          }
      );
    console.log(id);
    
    this.props.getBugs(id);

  };

  render() {
    const { user } = this.props.auth;
    const bugItem = this.props.bugs;
    const bugItems = this.props.bugs.map(bug =>(
      <div key={bug.id}>
        <h3>{bug.summary}</h3>
        <p>{bug.description}</p>
      </div>
    ));

    return (
      <div className="dashboard">
        <Switch>
          <Navbar user={user}/>

          <Route exact path="/board" exact component={Board} />
        </Switch>
        <Container style={{marginLeft: "20rem"}}>
          <h1>Bugs</h1>
          <CreateModal />
          <ListGroup>
            <TransitionGroup>
              {bugItem.map(({ _id, name, description, date }) => (
                <CSSTransition key={_id} timeout={100} classNames="fade">
                  <ListGroupItem >
                    <Button 
                      className="remove-btn"
                      color="danger"
                      size="sm"
                      onClick={this.onDeleteClick.bind(this, _id)}>&times;</Button>
                  
                      <b>Name:</b> {name} &emsp;
                      <b>Description:</b> {description} &emsp;
                      <b>Date:</b> {date} &emsp;
                  </ListGroupItem>
                </CSSTransition>
              ))}

            </TransitionGroup>      
          </ListGroup>
        </Container>

        {/* <button
          style={{
            width: "150px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
            marginTop: "1rem",
          }}
          onClick={this.onLogoutClick}
          className="btn btn-large waves-effect waves-light hoverable blue accent-3"
        >
          Logout
        </button> */}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBugs: (id) => dispatch(getBugs(id))
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  bugs: state.bugs.bugs
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
