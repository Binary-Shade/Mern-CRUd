import React, { useEffect, useState } from 'react'
import Pencil from '../assets/Pencil'
import Trash from '../assets/Trash'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { GiWaterGallon } from "react-icons/gi";

const UserTable = ({users, getUsers}) => {  
  const handleDelete = async(id) => {
    try {
      await axios.delete(`https://mern-crud-server-chi.vercel.app/deleteUser/${id}`)
      getUsers()
    } catch (error) {
      console.error(error);
    }
  }

  const handleCan = async (user) =>{
    try {
      const newTotal = user.total + 30; // Assuming each can adds 30 to the total
      await axios.put(`https://mern-crud-server-chi.vercel.app/updateCan/${user._id}`, { total: newTotal });
      getUsers(); // Refresh the user list after updating
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
        {
          users.length > 0 ? (
            users.map((user) =>(
              <tr className='bg-white hover:bg-gray-100' key={user._id}>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm"> {user.firstName} </td>
                  {/* <td className="px-5 py-5 border-b border-gray-200 text-sm"> {user.lastName} </td> */}
                  {/* <td className="px-5 py-5 border-b border-gray-200 text-sm"> {user.cans} </td>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm"> {user.updatedAt.slice(0,10)} </td> */}
                  <td className="px-5 py-5 border-b border-gray-200 text-sm"> {user.total} </td>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm flex gap-5"> 
                    <Link to={`/update/${user._id}`}><Pencil header={'update personal information'} id={user._id}/></Link> 
                    <button onClick={()=>handleDelete(user._id)}><Trash /></button>  
                    <button onClick={()=>handleCan(user)}><GiWaterGallon /></button> 
                  </td>
              </tr>
          ))
          ) : (
            <tr>
              <td colSpan={6} className="px-5 py-5 border-b text-center border-gray-200 text-sm">No users found!</td>
            </tr>
          )
        }
    </>
  )
}

export default UserTable
