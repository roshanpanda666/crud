import { connectionSRT } from "@/lib/db";
import { User } from "@/lib/model/userschema";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
export async function PUT(request,content){
    const filter=content.params.dynamicuser
    const data={_id:filter}
    const payload=await request.json()
    console.log(payload);
    await mongoose.connect(connectionSRT)
    const result = await User.findOneAndUpdate(data,payload)
    return NextResponse.json({result,success:true})

}

export async function GET(request,content){
    const filter=content.params.dynamicuser
    const record={_id:filter}
    await mongoose.connect(connectionSRT)
    const result=await User.findById(record)
    return NextResponse.json({result,success:true})
}