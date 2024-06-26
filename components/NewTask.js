'use client'

import React, { useState } from 'react'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css"
import { useRouter } from 'next/navigation';
import axios from 'axios';



const NewTask = () => {
    
    const [taskData,setTaskData] = useState({
        title:'',
        desc:'',
        status:'Open',
    })
    const router = useRouter()

    const handleCreateTask = async () => {
        try{
            const response = await axios.post('/api/task',taskData)
            console.log('task created',response.data)
            setTaskData({
                title:'',
                desc:'',
                status:'',
            })
            router.push('/task')
            document.getElementById('my_modal_3').closest()
            window.location.reload()
        }catch(error){

        }
    }

  return (
    <section>
        <button className='btn' 
        onClick={()=>document.getElementById('my_modal_3').showModal()}
        >New Task</button>
        <dialog id='my_modal_3' className='modal'>
        <div className='modal-box'>
        <form method='dialog'>
            <label className='mr-2'>Title</label>
            <input className='input input-bordered input-primary w-full max-w'
            type='text'
            value={taskData.title}
            onChange={(e)=>setTaskData({...taskData,title:e.target.value})}
            />
            <div className='mb-2'>
            <label className='mr-2'>Description</label>
            <SimpleMDE 
            value={taskData.desc}
            onChange={(value)=>setTaskData({...taskData,desc:value})}
            />
            </div>
            <div className='mb-4'>
                <label className='mr-2'>Status:</label>
            <select>
                <option value="Open">Open</option>
                <option value="Close">Close</option>
                <option value="Progress">Progress</option>
            </select>
            </div>
            <div className='mb-4'>
            <button className='btn btn-wide'
            onClick={handleCreateTask}
            >Created Task</button>
            </div>
            <button className=''>X</button>
        </form>
         </div>
        </dialog>
    </section>
  )
}

export default NewTask
