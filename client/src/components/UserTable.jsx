import React from 'react'
import Pencil from '../assets/Pencil'
import Trash from '../assets/Trash'
import { Link } from 'react-router-dom'

const UserTable = ({users}) => {
  return (
    <>
        {
            users.map((user) =>(
                <tr className='bg-white hover:bg-gray-100' key={user.id}>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm"> {user.id} </td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm"> {user.name} </td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm"> {user.email} </td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm"> {user.age} </td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm flex gap-5"> <Link to={'/Update'}><Pencil/></Link> <Trash /> </td>
                </tr>
            ))
        }
    </>
  )
}

export default UserTable