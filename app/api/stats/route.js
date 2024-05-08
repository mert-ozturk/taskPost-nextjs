import db from "@/lib/db";
import Task from "@/models/Task";
import User from "@/models/User";
import { NextResponse } from "next/server";



export async function GET(req){
    await db.connect()
    try{
        const userCount = await User.countDocuments();
        const totalTaskCount = await Task.countDocuments();
        const openTaskCount = await Task.countDocuments();
        const closeTaskCount = await Task.countDocuments();
        const progressTaskCount = await Task.countDocuments();
       const stats = {
        userCount,
        totalTaskCount,
        openTaskCount,
        closeTaskCount,
        progressTaskCount
       }
       return new NextResponse(JSON.stringify(stats),{status:200})
    }catch(error){
      return new NextResponse(JSON.stringify(null),{status:500})
    }
}