import React from 'react'
import UserForm from './UserForm'


const Create = () => {
 
  return (
    <div className="border border-slate-300 rounded-md p-6">
      <UserForm header={'Add personal information'} btnName={'save'}/>
      
    </div>
  )
}

export default Create