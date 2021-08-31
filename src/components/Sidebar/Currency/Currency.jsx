import { useState, useEffect } from 'react';
import { createArrCurrency } from './funcCreateArrCurrency';
import Spinner from '../../Spinner';
import './Currency.scss';

export default function Currency() {
  const [USD, setUSD] = useState({ buy: '00.00', sale: '00.00' });
  const [EUR, setEUR] = useState({ buy: '00.00', sale: '00.00' });
  const [RUB, setRUB] = useState({ buy: '00.00', sale: '00.00' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    createArrCurrency()
      .then(data => {
        data.forEach(({ ccy, buy, sale }) => {
          if (ccy === 'USD') {
            setUSD({ buy: buy, sale: sale });
          } else if (ccy === 'EUR') {
            setEUR({ buy: buy, sale: sale });
          } else if (ccy === 'RUR') {
            setRUB({ buy: buy, sale: sale });
          }
        });
      })
      .catch(err => err)
      .finally(setLoading(false));
  }, []);

  return (
    <div className="currency">
      <div className={`currency__blur-${loading}`}>
        {loading && <Spinner />}
        {/*  */}
        <ul className="currency__title-list list">
          <li className="currency__title">Валюта</li>
          <li className="currency__title">Покупка</li>
          <li className="currency__title">Продажа</li>
        </ul>
        {/*  */}
        <ul className="currency__price-list">
          <li className="currency__price list">
            <span>USD</span>
            <span>{USD.buy}</span>
            <span>{USD.sale}</span>
          </li>
          <li className="currency__price list">
            <span>EUR</span>
            <span>{EUR.buy}</span>
            <span>{EUR.sale}</span>
          </li>
          <li className="currency__price list">
            <span>RUB</span>
            <span>{RUB.buy}</span>
            <span>{RUB.sale}</span>
          </li>
        </ul>
        {/*  */}
      </div>
    </div>
  );
}
