import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Update = () => {
  const [firstName, setFirst] = useState('')
  const [lastName, setLast] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(()=>{
    const getDetails = async () =>{
      const result = await axios.get('http://localhost:3001/getUser/'+id)
      console.log(result.data);
      setFirst(result.data.firstName)
      setLast(result.data.lastName)
      setAge(result.data.age)
      setEmail(result.data.email)
    }
    getDetails()
  }, [])

  const handleUpdate = async(e) =>{
    e.preventDefault()
    try {
      const response = await axios.put(`http://localhost:3001/Update/`+id,  {
        firstName,
        lastName,
        age,
        email
      })
      console.log(response.data);
    }catch(err){
      console.error(err.message);
    }finally{
      navigate('/')
    }
  }

  return (
    <div className="border border-slate-300 rounded-md p-6">
    <div className="space-y-12">
        <form onSubmit={(e)=>handleUpdate(e)}>
        <div className="border-b border-slate-200 pb-12">
          <h2 className="text-center font-semibold leading-7 text-gray-900">update personal information</h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  value={firstName}
                  onChange={(e)=>setFirst(e.target.value)}
                  type="text"
                  autoComplete="given-name"
                  placeholder='enter your first name'
                  className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  value={lastName}
                  onChange={(e)=>setLast(e.target.value)}
                  type="text"
                  placeholder='enter last-name'
                  autoComplete="family-name"
                  className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  type="text"
                  autoComplete="email"
                  placeholder='enter email-address'
                  className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                age
              </label>
              <div className="mt-2">
                <input
                  value={age}
                  onChange={(e)=>setAge(e.target.value)}
                  type="text"
                  autoComplete="street-address"
                  placeholder='enter your age'
                  className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            </div>            
          </div>
          <div className="mt-6 flex users-center justify-end gap-x-6">
        <Link to={'/'} className='text-sm font-semibold leading-6 text-gray-900'>cancel</Link>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          update
        </button>
      </div>
        </form>
        </div> 
        </div>       
  )
}

export default Update