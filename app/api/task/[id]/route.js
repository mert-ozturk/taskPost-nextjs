import Task from "@/models/Task"
import { NextResponse } from "next/server"




export async function GET(req,ctx){
    await db.connect()
    const id = ctx.params.id
    try{
        const task = await Task.findById(id)
        return new NextResponse(JSON.stringify(task),{status:200})
    }catch(error){
        return new NextResponse(JSON.stringify(null),{status:500})
    }
}