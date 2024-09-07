import React from 'react'

export default function UserItem({ user }) {
    return <tr>
        <td>{user.data.name}</td>
        <td>{user.data.age}</td>
        <td>{user.data.login}</td>
    </tr>
}
