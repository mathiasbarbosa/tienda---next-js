import { supabase } from "../../config/db";
import { Tables } from "@/database.types";
let movie: Tables<'productos'>
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log({ body });
  
  // const res =await supabase
  // .from('productos')
  // .insert()
  // const data = await res.json()
  return Response.json(body)
}