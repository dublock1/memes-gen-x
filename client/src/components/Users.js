import React, { Component } from 'react'
import axios from 'axios'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default class Users extends Component {
    state = {
        users: [],
        isNewFormDisplayed: false,
        newUser: {
            firstName: '',
            lastName: '',
            email: ''
        }
    }

    componentDidMount() {
        this.getAllUsers()
    }

    getAllUsers = () => {
        axios.get('/api/users')
            .then((res) => {
                console.log(res)
                this.setState({users: res.data})
            })
    }

    handleNewUserSubmit = (event) => {
        event.preventDefault()

        axios.post('/api/users', this.state.newUser)
        .then(() => {
            this.setState({isNewFormDisplayed: false})
                this.getAllUsers()
        })
    }

    handleInputChange = (event) => {
        const copiedUser = {...this.state.newUser}
        copiedUser[event.target.name] = event.target.value

        this.setState({newUser: copiedUser})
    }

    handleToggleNewForm = (event) => {
        this.setState((state) => {
            return {isNewFormDisplayed: !state.isNewFormDisplayed}
        })
    }
    render() {

        let usersList = this.state.users.map((user) => {
            return(
                <div>
                <Link 
                    key={user._id}
                    to={`/users/${user._id}`}
                    >
                    {user.firstName} {user.lastName}

                    
                            
                    </Link>
                    </div>
            )
        })

        return (
            this.state.isNewFormDisplayed
                 ? <form onSubmit={this.handleNewUserSubmit}>
                     <label htmlFor='new-user-firstname'>First Name</label>
                        <input 
                            type='text' 
                            id='new-user-firstname' 
                            name='firstName' 
                            onChange={this.handleInputChange} 
                            value={this.state.newUser.firstName}
                            />
                            <label htmlFor='new-user-lastname'>Last Name</label>
                        <input 
                            type='text' 
                            id='new-user-lastname' 
                            name='lastName' 
                            onChange={this.handleInputChange} 
                            value={this.state.newUser.lastName}
                            />
                            <label htmlFor='new-user-email'>User Email</label>
                            <input 
                            type='text'
                            id='new-user-email'
                            name='email'
                            onChange={this.handleInputChange}
                            value={this.state.newUser.email}

                            />

                            <input 
                                type='submit'
                                value='Create User'
                            />

                 </form>
                           :    
            <div>
                <Button onClick={this.handleToggleNewForm}>Add User</Button>
                {usersList}
            </div>
        )
    }
}
