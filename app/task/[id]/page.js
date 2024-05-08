'use client'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const SingleTask = (ctx) => {
  const [task,setTask] = useState(null)
  const router = useRouter()
  const {data:session,status} = useSession()

  const fetchData = (taskId) => {
    axios.get(`/api/task/${taskId}`)
    .then((response)=> {
      setTask(response.data)
    })
  }

  useEffect(()=>{
    if(status === 'authenticated'){
      fetchData(ctx.params.id)
    }
  },[ctx.params.id,status])

  if(status !== 'authenticated'){
    return <p className='text-center'>Not Authorized</p>
  }

  if(!task){
    return <p className='text-center'>Loading Task</p>
  }

 
  const handleDeleteTask = () => {
    axios.delete(`/api/task/${ctx.params.id}`)
    .then(()=> {
      router.push('/task')
    })
    .catch((error)=> {
      console.error("Error deleting task",error)
    })
  }
 
 

  return (
    <section className='px-4 py-8'>
    <h2>Single Task</h2>
    <table className='w-full border-collapse mt-4'>
      <thead>
        <tr>
          <th className='border border-gray-300'>Title</th>
          <th className='border border-gray-300'>Description</th>
          <th className='border border-gray-300'>Status</th>
          <th className='border border-gray-300'>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='border border-gray-300 text-center py-2'>{task.title}</td>
          <td className='border border-gray-300 text-center py-2'>{task.desc}</td>
          <td className='border border-gray-300 text-center py-2'>{task.status}</td>
          <td className='border border-gray-300 text-center py-2'>
            <Link href={`/task/edit/${ctx.params.id}`}
            className='bg-gray-400 hover:bg-gray-500 font-medium py-2 ml-2'
            >
            Edit
            </Link>
            <button onClick={handleDeleteTask}>
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
  )
}

export default SingleTask