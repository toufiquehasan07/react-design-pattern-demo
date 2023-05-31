import React, { Component } from 'react'

class UsersList extends Component {

    render() {
        return (
            <>
                <h1>User List</h1>
                <ol>
                    {
                        this.props.users.map((user, index) => <li key={index}>{ `${user.firstName} ${user.middleName} ${user.lastName}`}</li>)
                    }
                </ol>
            </>
        )
    }

}

export default UsersList;