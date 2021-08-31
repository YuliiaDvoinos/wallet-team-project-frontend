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
    <div className={`blur-${loading}`}>
      <div className="currency">
        {loading && <Spinner />}
        <ul className="currency__title-list list">
          <li className="currency__title-list--title">Валюта</li>
          <li className="currency__title-list--title">Покупка</li>
          <li className="currency__title-list--title">Продажа</li>
        </ul>
        <div className="prise-list-wrapper">
          <ul className="currency__prise-list list">
            <li>USD</li>
            <li>{USD.buy}</li>
            <li>{USD.sale}</li>
          </ul>
          <ul className="currency__prise-list list">
            <li>EUR</li>
            <li>{EUR.buy}</li>
            <li>{EUR.sale}</li>
          </ul>
          <ul className="currency__prise-list list">
            <li>RUB</li>
            <li>{RUB.buy}</li>
            <li>{RUB.sale}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
