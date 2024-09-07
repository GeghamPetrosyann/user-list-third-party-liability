import { useState } from 'react'
import './App.css'
import AddUser from './components/AddUser'
import UserList from './components/UserList'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [users, setUsers] = useState([])
  const [id, setId] = useState(0)
  const handleAdd = data => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (emailRegex.test(data.login)) {
      
      setId(id + 1)
      toast("success")
      setUsers([...users, { data, id: id }])
    }
  }

  return <>
    <AddUser
      onAdd={handleAdd}
    />
    <UserList
      users={users}
    />
  </>
}

export default App
