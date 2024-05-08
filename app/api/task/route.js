import db from '@/lib/db'
import Task from '@/models/Task'
import { NextResponse } from 'next/server'


export async function GET(req){
    await db.connect()
    try{
        const tasks = await Task.find({})
        return new NextResponse(JSON.stringify(tasks),{status:201})
    }catch(error){
        return new NextResponse(JSON.stringify(null),{status:500})
    }
}

export async function POST(req){
    await db.connect()
    try{
        const body = await req.json()
        const newTask = await Task.create(body)
        return new NextResponse(JSON.stringify(newTask),{status:201})
    }catch(error){
        return new NextResponse(JSON.stringify(null),{status:500})
    }
}