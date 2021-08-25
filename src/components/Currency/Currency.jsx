import { useState, useEffect } from "react";
import { fetchData } from './fetchData'
import style from './Currency.scss'

const Currency = () => {
  const [USD, setUSD] = useState({ buy: '00.00', sale: '00.00' })
  const [EUR, setEUR] = useState({ buy: '00.00', sale: '00.00' })
  const [RUB, setRUB] = useState({ buy: '00.00', sale: '00.00' })
  
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    
    fetchData()
      .then(res => res.data)
      .catch(err => err)
      .finally(setLoading(false))
    
  },[])

  return (
    <p>hello</p>
  )
}


Currency.prototype = {
  
}

export default Currency