import { connectionStr } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/restaurantsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

// to get the data from the DataBase
export async function GET(){
    await mongoose.connect(connectionStr,{useNewUrlParser:true})
    const data = await restaurantSchema.find()
    console.log(data);
    return NextResponse.json({result:data})
}

// to store the data into our DataBase
export async function POST(request) {
    let payload = await request.json();
    await mongoose.connect(connectionStr, {useNewUrlParser:true})
    const restaurant = new restaurantSchema(payload)
    const result = await restaurant.save();
    return NextResponse.json({result, success:true})
}
