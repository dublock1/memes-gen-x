import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";
export default class User extends Component {
  state = {
    isEditFormDisplayed: false,
    redirectToHome: false,
    newUser: {
      firstName: "",
      lastName: "",
      email: ""
    }
  };

  componentDidMount() {
    axios.get(`/api/users/${this.props.match.params.userId}`).then(res => {
      this.setState({ newUser: res.data });
    });
  }

  handleInputChange = event => {
    const copiedUser = { ...this.state.newUser };
    copiedUser[event.target.name] = event.target.value;

    this.setState({ newUser: copiedUser });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .put(`/api/users/${this.state.newUser._id}`, this.state.newUser)
      .then(res => {
        this.setState({
          newUser: res.data,
          isEditFormDisplayed: false,
          redirectToHome: true
        });
      });
  };

  handleToggleEditForm = event => {
    this.setState(state => {
      return { isEditFormDisplayed: !state.isEditFormDisplayed };
    });
  };

  handleDeleteCreature = () => {
    axios.delete(`/api/users/${this.state.newUser._id}`).then(() => {
      this.setState({ redirectToHome: true });
    });
  };

  render() {
    if (this.state.redirectToHome) {
      return <Redirect to="/users" />;
    }
    return this.state.isEditFormDisplayed ? (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="new-user-firstname">First Name</label>
        <input
          type="text"
          id="new-user-firstname"
          name="firstName"
          onChange={this.handleInputChange}
          value={this.state.newUser.firstName}
        />
        <label htmlFor="new-user-lastname">Last Name</label>
        <input
          type="text"
          id="new-user-lastname"
          name="lastName"
          onChange={this.handleInputChange}
          value={this.state.newUser.lastName}
        />
        <label htmlFor="new-user-email">User Email</label>
        <input
          type="text"
          id="new-user-email"
          name="email"
          onChange={this.handleInputChange}
          value={this.state.newUser.email}
        />

        <input type="submit" value="Update User" />
      </form>
    ) : (
      <div>
        <Button onClick={this.handleToggleEditForm}>Edit User</Button>
        <Button onClick={this.handleDeleteCreature}>Delete User</Button>
      </div>
    );
  }
}
