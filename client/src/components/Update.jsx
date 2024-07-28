import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Update = () => {
  const [firstName, setFirst] = useState('')
  const [lastName, setLast] = useState('')
  const [cans, setCans] = useState('')
  const [paid, setPaid] = useState('')
  const [total, setTotal] = useState('')
  const {id} = useParams('')
  const navigate = useNavigate()

  useEffect(()=>{
    const getDetails = async () =>{
      const result = await axios.get('http://localhost:3001/getUser/'+id)
      setFirst(result.data.firstName)
      setLast(result.data.lastName)
      setCans(result.data.cans)
      setTotal(result.data.total)
    }
    getDetails()
  }, [id])

  const handleUpdate = async(e) =>{
    e.preventDefault()
    try {
      // Calculate the updated total after payment
      const updatedTotal = total - paid;

      const response = await axios.put(`http://localhost:3001/Update/`+id,  {
        firstName,
        lastName,
        cans,
        total: updatedTotal  // Use the updated total
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
        <form onSubmit={handleUpdate}>
          <div className="border-b border-slate-200 pb-12">
            <h2 className="text-center font-semibold leading-7 text-gray-900">Update Personal Information</h2>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                  First Name
                </label>
                <div className="mt-2">
                  <input
                    value={firstName}
                    onChange={(e) => setFirst(e.target.value)}
                    type="text"
                    placeholder='Enter your first name'
                    className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Last Name
                </label>
                <div className="mt-2">
                  <input
                    value={lastName}
                    onChange={(e) => setLast(e.target.value)}
                    type="text"
                    placeholder='Enter last name'
                    className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="cans" className="block text-sm font-medium leading-6 text-gray-900">
                  Cans
                </label>
                <div className="mt-2">
                  <input
                    value={cans}
                    onChange={(e) => setCans(e.target.value)}
                    type="number"
                    placeholder='Enter cans'
                    className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label htmlFor="total" className="block text-sm font-medium leading-6 text-gray-900">
                  Total Can Amount
                </label>
                <div className="mt-2">
                  <input
                    value={total}
                    onChange={(e) => setTotal(e.target.value * 30)}
                    type="number"
                    disabled
                    placeholder='Total can amount'
                    className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="col-span-full">
                <label htmlFor="paid" className="block text-sm font-medium leading-6 text-gray-900">
                  Payment
                </label>
                <div className="mt-2">
                  <input
                    value={paid}
                    onChange={(e) => setPaid(e.target.value)}
                    type="number"
                    placeholder='Enter paid amount'
                    className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex users-center justify-end gap-x-6">
            <Link to={'/'} className='text-sm font-semibold leading-6 text-gray-900'>Cancel</Link>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Update
            </button>
          </div>
        </form>
      </div> 
    </div>
  )
}

export default Update
