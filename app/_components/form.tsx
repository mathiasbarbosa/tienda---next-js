import React, { useRef } from 'react'

async function Form() {
  const formRef = useRef<HTMLFormElement>(null)


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current) throw Error("formRef is not assigned");
    let formData = new FormData(formRef.current)
    let data: Record<string, unknown> = {}
    const entries = Array.from(formData.entries());
    for (let [nombre, value] of entries) {
      if (value !== undefined) {
        data[nombre] = value
      }
    }
    console.log(data);
    await fetch('http://localhost:3000/api/cargar_producto', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data)
    })
  }


  return (
    <form ref={formRef} className="flex flex-col w-[80%] mx-auto h-80 justify-evenly items-center text-green-500" onSubmit={handleSubmit}>
      <label htmlFor="modelo">Modelo</label>
      <input type="text" id="modelo" name="modelo" placeholder="modelo" className="p-2 w-[50%]" />
      <label htmlFor="precio">Precio</label>
      <input type="text" id="precio" name="precio" placeholder="precio" className="p-2 w-[50%]" />
      <label htmlFor="lanzamiento">Lanzamiento</label>
      <input type="text" id="lanzamiento" name="lanzamiento" placeholder="lanzamiento" className="p-2 w-[50%]" />
      <label htmlFor="imagen">Imagen</label>
      <input type="text" id="imagen" name="imagen" placeholder="imagen" className="p-2 w-[50%]" />
      <button type="submit" className="mx-auto mt-4 bg-green-500 w-40 h-10 text-white">Cargar</button>

    </form >
  )
}

export default Form
