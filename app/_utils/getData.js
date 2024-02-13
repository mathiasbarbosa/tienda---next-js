import { URL_base } from '@/app/_utils/consts'

const getData = async () => {
  const res = await fetch(URL_base)
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()

}

export default getData