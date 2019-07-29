import React, { Component } from "react";
import { Button, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        className="justify-content-between"
        activeKey="/home"
      >
        <h1>Meme Gen X</h1>
        <a href="/users">
          <Button>LOGIN</Button>
        </a>
      </Navbar>
    );
  }
}
