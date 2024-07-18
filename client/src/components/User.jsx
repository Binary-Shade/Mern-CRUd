import React, {useState, useEffect} from 'react';
import UserTable from './UserTable';
import { Link } from 'react-router-dom';
import axios from 'axios';

const User = () => {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    try {
      const result = await axios.get('http://localhost:3001')
      setUsers(result.data)
      console.log(result.data);
    }catch(err){
      console.log(err);
    }
  }

    useEffect(()=>{
      getUsers()
    }, [])

  return (
    <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
        <Link to={'/create'} className='p-2 bg-emerald-600 hover:bg-emerald-500 rounded-sm'>add users</Link>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    First Name
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Last Name
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Age
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                
                <UserTable getUsers={getUsers} users={users}/>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
};

export default User;
