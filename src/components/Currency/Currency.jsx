import { useState, useEffect } from "react";
import { fetchData } from './fetchData'
import './Currency.scss'

const Currency = () => {

  const [USD, setUSD] = useState({ buy: '00.00', sale: '00.00' })
  const [EUR, setEUR] = useState({ buy: '00.00', sale: '00.00' })
  const [RUB, setRUB] = useState({ buy: '00.00', sale: '00.00' })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetchData()
      .then(({data}) => {
        data.forEach(({ccy, buy, sale}) => {
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
      .finally(setLoading(false))}
    ,[])

  return (
    <div className="tableWrapper">
      <ul className="titleList">
        <li className="title">Валюта</li>
        <li className="title">Покупка</li>
        <li className="title">Продажа</li>
      </ul>
      <ul className="priceList">
        <li className="currencyName">USD</li>
        <li className="price">{ USD.buy }</li>
        <li className="price">{ USD.sale}</li>
      </ul>
      <ul className="priceList">
        <li className="currencyName">EUR</li>
        <li className="price">{ EUR.buy }</li>
        <li className="price">{ EUR.sale }</li>
      </ul>
      <ul className="priceList">
        <li className="currencyName">RUB</li>
        <li className="price">{ RUB.buy }</li>
        <li className="price">{ RUB.sale }</li>
      </ul>
   </div>
  )
}


export default Currency