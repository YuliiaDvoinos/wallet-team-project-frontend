import { useDispatch } from 'react-redux';
import { useState, useEffect, useCallback } from 'react';
import { closeModalTransaction } from '../../../redux/transactions/transactions-actions';
import Datetime from 'react-datetime';
import moment from 'moment';
import Select from 'react-select';
import Switch from 'react-switch';
import Icons from '../../Icons';
import customStyles from '../SelectInputStyles';
import 'react-datetime/css/react-datetime.css';
import 'moment/locale/ru';
import './AddTransaction.scss';

export default function AddTransaction() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [checked, setChecked] = useState(true);
  const [boxShadow, setBoxShadowHandle] = useState(
    '0px 6px 15px rgba(255, 101, 150, 0.5)',
  );

  const dispatch = useDispatch();
  const closeTransaction = useCallback(() => {
    return dispatch(closeModalTransaction());
  }, [dispatch]);

  const handleChange = nextChecked => {
    setChecked(nextChecked);
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        closeTransaction();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeTransaction]);

  useEffect(() => {
    if (checked) {
      setBoxShadowHandle('0px 6px 15px rgba(255, 101, 150, 0.5)');
      return;
    }

    setBoxShadowHandle('0px 6px 15px rgba(36, 204, 167, 0.5)');
  }, [checked]);

  const inputProps = {
    className: 'input date__input',
  };

  const yesterday = moment().subtract(1, 'day');
  const valid = current => current.isAfter(yesterday);

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'Pepsi', label: 'Pepsi' },
    { value: 'Cola', label: 'Cola' },
    { value: 'Nuts', label: 'Nuts' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <div className="add-transaction__wrapper">
      <h3 className="transaction__title">Добавить транзакцию</h3>

      <div className="transaction__wrapper">
        <form className="transaction__form">
          <div className="checkbox__wrapper">
            <span className={`checkbox__span ${!checked && 'active-income'}`}>
              Доход
            </span>
            <Switch
              onChange={handleChange}
              checked={checked}
              className="checkbox__button"
              height={40}
              width={80}
              handleDiameter={44}
              onHandleColor="#FF6596"
              offHandleColor="#24cca7"
              onColor="#fff"
              offColor="#fff"
              boxShadow={boxShadow}
              checkedHandleIcon={
                <Icons className="switch-icon__spend" id="checkboxSpendIcon" />
              }
              uncheckedHandleIcon={
                <Icons className="add-transaction__icon" id="addTransaction" />
              }
            />
            <span className={`checkbox__span ${checked && 'active-spend'}`}>
              Расход
            </span>
          </div>

          {checked && (
            <div className="select__wrapper">
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                placeholder="Выберите категорию"
                styles={customStyles}
              />
              <Icons className="select__icon" id="selectInputIcon" />
            </div>
          )}

          <div className="form__wrapper">
            <label className="form__sum">
              <input
                type="text"
                className="input sum__input"
                placeholder="0.00"
              ></input>
            </label>

            <Datetime
              className="date__wrapper"
              locale="ru"
              initialValue={new Date()}
              closeOnSelect={true}
              timeFormat={false}
              inputProps={inputProps}
              isValidDate={valid}
            />
            <Icons className="date__icon" id="transactionsDate" />
          </div>

          <label className="form__text">
            <input
              type="text"
              className="input text__input"
              placeholder="Комментарий"
            ></input>
          </label>
        </form>

        <button type="button" className="transaction__button">
          Добавить
        </button>
        <button
          type="button"
          className="transaction__button transaction__button--cancel"
          onClick={closeTransaction}
        >
          Отмена
        </button>
      </div>
    </div>
  );
}
