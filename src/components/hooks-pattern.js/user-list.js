import React from 'react'

function UsersList (props) {
    const {users} = props;

    return (
        <>
            <h1>User List</h1>
            <ol>
                {
                    users.map((user, index) => <li key={index}>{ `${user.firstName} ${user.middleName} ${user.lastName}`}</li>)
                }
            </ol>
        </>
    )

}

export default UsersList;