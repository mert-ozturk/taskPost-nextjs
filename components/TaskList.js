'use client'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'


const TaskList = () => {
    const [tasks,setTasks] = useState([])
    const [filter,setFilter] = useState("all")

    const fetchTasks = async () => {
        try{
            const response = await axios.get("/api/task")
            setTasks(response.data)
        }catch(error){  
            console.log("Error getting tasks",error)
        }
    }

    useEffect(()=> {
        fetchTasks()
    },[])

    const handleFilterChage = (e) =>{
        setFilter(e.target.value)
    }

    const filteredTask = filter === "all" ? tasks: tasks.filter(task => task.status === filter)
  return (
    <section className='px-4 py-8'>


        <table className='w-full border-collapse'>
       <thead>
        <tr>
            <th className='border border-gray-300'>Title</th>
            <th className='border border-gray-300'>Description</th>
            <th className='border border-gray-300'>Update</th>
        </tr>
       </thead>
       <tbody>
        {filteredTask.map((task)=> (
            <tr key={task._id}>
                <td className='border border-gray-300 text-center'>{task.title}</td>
                <td className='border border-gray-300 text-center'>{task.status}</td>
                <td className='border border-gray-300 text-center'>
                    <Link href={`/task/${task._id}`}>
                    Update
                    </Link>
                  
                </td>
           
            </tr>
        ))}
       </tbody>
       </table>
    </section>
  )
}

export default TaskList