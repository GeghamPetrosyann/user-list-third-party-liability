import Types, { arrayOf } from "prop-types"
import React from 'react'
import UserItem from "./UserItem"
import { toast } from "react-toastify"

export default function UserList({users}) {
  return <table className='center-table-wrapper'>
  <thead>
      <tr>
          <th>name</th>
          <th>age</th>
          <th>login</th>
      </tr>
  </thead>
  <tbody>
      {
        users.map(user => <UserItem
          user = {user}
          key={user.id}
          />)
        }
  </tbody>
</table>
}

