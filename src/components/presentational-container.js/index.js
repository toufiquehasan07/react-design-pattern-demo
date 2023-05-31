import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import UsersList from './user-list';

export default class Users extends Component {
    
    // data
    state = {
        users: []
    }

    getUsers = async () => {
        // API call
       const response = await axios({
            method: "GET",
            url: 'https://dummyjson.com/users',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if(response.status == 200) { //logic
            const {users} = response.data; // data
            this.setState({
                users: [...users]
            })
        }
    }

    componentDidMount() {
        this.getUsers();
    }
    
    render() {
        return  <UsersList users={this.state.users} />
    }
}