'use client'
import Image from "next/image"
import { ICelular } from "../_utils/interfaces"

const CardCelular = (celular: ICelular) => {
  const { idCelular, imagen, lanzamiento, marca, modelo, precio } = celular

  const handleDetail = () => {
    console.log('click');

  }

  return (
    <div className="w-80 h-64 flex flex-wrap  border" onClick={handleDetail}>
      <div className="w-2/4 flex flex-col justify-evenly p-4">
        <h2>{modelo}</h2>
        <h3>{marca}</h3>
        <h4>{precio}</h4>
      </div>
      <div className="w-2/4">
        <Image alt={modelo} src={imagen} width={150} height={130} style={{ width: "100%", height: '200px' }} />
      </div>
      <button className="mx-auto bg-green-500 w-40 h-10">Add item</button>
    </div>
  )
}

export default CardCelular