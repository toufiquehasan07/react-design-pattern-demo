import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import UsersList from './user-list';

function Users () {
    
    // data
    const [users, setUsers] = useState([]);
    
    const getUsers = async () => {
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
            setUsers(users);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);
    
    
    return  <UsersList users={users} />
    
}

export default Users;