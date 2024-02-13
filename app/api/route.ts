import { supabase } from "../config/db";

export async function GET() {
  const {data, error} = await supabase.from('productos').select('*')
  if (error) return Response.json(error)
  return Response.json(data)
}