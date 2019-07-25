import React, { Component } from 'react'
import {Button, Navbar} from 'react-bootstrap';

export default class NavBar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" sticky="top" className="justify-content-between" activeKey="/home">
                <h1>Meme Gen X</h1>
                <Button >LOGIN</Button>
            </Navbar>
            
        )
    }
}

