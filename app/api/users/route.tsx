import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export async function GET(request:NextRequest) {
    return NextResponse.json([
        {id: 1, name: "Viateur"},
        {id: 2 , name: "bertin"}
    ])
}

export async function POST(request:NextRequest) {
    const body = await request.json()
    const validation = schema.safeParse(body);
    if(!validation.success)
    return NextResponse.json({error: validation.error.errors})
const user =  await prisma.user.findUnique({
    where:{
        email: body
    }
})
if(user){
    return NextResponse.json({Error: "The user alresdy exists"},{status:400})
}
const newUser = await prisma.user.create({
    data:{
        name: body.name,
        email: body.email
    }
})
    return NextResponse.json(newUser, {status: 201})
}
export async function PUT(request:NextRequest,{params}:{params:{id:number}}) {
    const body = await request.json()
    if(!body.name)
    return NextResponse.json({error: "Plewase enter name is required"});

    if(params.id > 10)
    return NextResponse.json({error: "The user doesn't exist"},{status: 400})
    return NextResponse.json({id: 1, name: body.name}, {status: 200})
}
export async function DELETE(request:NextRequest,{params}:{params:{id:number}}) {
    const body = await request.json()
    if(!body.name)
    return NextResponse.json({error: "Plewase enter name is required"});

    if(params.id > 10)
    return NextResponse.json({error: "The user doesn't exist"},{status: 400})
    return NextResponse.json({})
}