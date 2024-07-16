import React from 'react'
import { Link } from 'react-router-dom'
import UserForm from './UserForm'

const Create = () => {
  return (
    <div className="border border-slate-300 rounded-md p-6">
    <form>
      <UserForm header={'Add personal information'}/>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Link to={'/'} className='text-sm font-semibold leading-6 text-gray-900'>cancel</Link>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
    </div>
  )
}

export default Create