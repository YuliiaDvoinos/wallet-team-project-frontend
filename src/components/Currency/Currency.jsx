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
      .then(res => {
        res.data.forEach(item => {
          if (item.ccy === 'USD') {
            setUSD({ buy: item.buy, sale: item.sale })
          } else if (item.ccy === 'EUR') {
            setEUR({ buy: item.buy, sale: item.sale })
          } else if (item.ccy === 'RUR') {
            setRUB({ buy: item.buy, sale: item.sale })
          }
        })
      })
      .catch(err => err)
      .finally(setLoading(false))}
    ,[])

  return (
    <div>
      <ul className={style.titleList}>
        <li className={style.title}>Валюта</li>
        <li className={style.title}>Покупка</li>
        <li className={style.title}>Продажа</li>
      </ul>
      <ul>
        <li className={style.currencyName}>USD</li>
        <li className={style.price}>{ USD.buy }</li>
        <li className={style.price}>{ USD.sale}</li>
      </ul>
      <ul>
        <li className={style.currencyName}>EUR</li>
        <li className={style.price}>{ EUR.buy }</li>
        <li className={style.price}>{ EUR.sale }</li>
      </ul>
      <ul>
        <li className={style.currencyName}>RUB</li>
        <li className={style.price}>{ RUB.buy }</li>
        <li className={style.price}>{ RUB.sale }</li>
      </ul>
   </div>
  )
}


export default Currency