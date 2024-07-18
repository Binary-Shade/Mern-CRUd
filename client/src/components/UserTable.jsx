import React from 'react'
import Pencil from '../assets/Pencil'
import Trash from '../assets/Trash'
import { Link } from 'react-router-dom'
import axios from 'axios'

const UserTable = ({users, getUsers}) => {  
  const handleDelete = async(id) => {
    const result = await axios.delete(`http://localhost:3001/deleteUser/${id}`)
    console.log(result);
    getUsers()
  }

  return (
    <>
        {
          users.length > 0 ? (
            users.map((user) =>(
              <tr className='bg-white hover:bg-gray-100' key={user._id}>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm"> {user.firstName} </td>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm"> {user.lastName} </td>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm"> {user.email} </td>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm"> {user.age} </td>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm flex gap-5"> <Link to={`/update/${user._id}`}><Pencil header={'update personal information'} id={user._id}/></Link> <button onClick={()=>handleDelete(user._id)}><Trash /></button> </td>
              </tr>
          ))
          ) : (
            <td colSpan={5} className="px-5 py-5 border-b text-center border-gray-200 text-sm"> no users found !</td>
          )
        }
    </>
  )
}

export default UserTable