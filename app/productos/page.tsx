import getData from '@/app/_utils/getData'
import { ICelular } from '../_utils/interfaces'
import CardCelular from '../_components/CardCelular'


export default async function Productos() {

  const data = await getData()

  return (
    data.length > 0 ? data.map((item: ICelular) => {
      return <CardCelular key={item.idCelular} {...item} />
    }) : null
  )
}