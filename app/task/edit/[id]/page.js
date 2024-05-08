'use client'

import React, { useState } from 'react'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

const EditTask = () => {
    const [taskData,setTaskData] = useState({
        title:'',
        dec:'',
        status:'Open',
    })
    const router = useRouter()
    const {data: session,status} = useSession()
  return (
    <div>
      Edit Task
    </div>
  )
}

export default EditTask
