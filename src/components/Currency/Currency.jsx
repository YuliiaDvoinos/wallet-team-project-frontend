import { useState, useEffect } from "react";
import { createArrCurrency } from "./funcCreateArrCurrency"
import Spinner from "../Spinner";
import './Currency.scss'

const Currency = () => {

  const [USD, setUSD] = useState({ buy: '00.00', sale: '00.00' })
  const [EUR, setEUR] = useState({ buy: '00.00', sale: '00.00' })
  const [RUB, setRUB] = useState({ buy: '00.00', sale: '00.00' })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    createArrCurrency()
      .then(data => {
        data.forEach(({ ccy, buy, sale }) => {
          if (ccy === 'USD') {
            setUSD({ buy: buy, sale: sale })
          } else if (ccy === 'EUR') {
            setEUR({ buy: buy, sale: sale })
          } else if (ccy === 'RUR') {
            setRUB({ buy: buy, sale: sale })
          }
        })
      })
      .catch(err => err)
      .finally(setLoading(false))
  }, [])
  
  return (

    
    
    <div className={`blur-${loading}`}>
      <div className="currencyWrapper">
        {loading && <Spinner/>}
        <ul className="titleList">
        <li className="title">Валюта</li>
        <li className="title">Покупка</li>
        <li className="title">Продажа</li>
      </ul>
      <div className="priseListWrapper">
        <ul className="priceList">
        <li >USD</li>
        <li >{ USD.buy }</li>
        <li >{ USD.sale}</li>
      </ul>
      <ul className="priceList">
        <li >EUR</li>
        <li >{ EUR.buy }</li>
        <li >{ EUR.sale }</li>
      </ul>
      <ul className="priceList">
        <li >RUB</li>
        <li >{ RUB.buy }</li>
        <li >{ RUB.sale }</li>
      </ul>
      </div>
      </div>
   </div>
  )
}


export default Currency