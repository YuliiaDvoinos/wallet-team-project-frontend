import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Datetime from 'react-datetime';
import moment from 'moment';
import Select from 'react-select';
import Switch from 'react-switch';
import { closeModalTransaction } from '../../../../redux/transactions/transactions-actions';
import { getCategories } from '../../../../redux/categories/categories-operations';
import { getAllCategories } from '../../../../redux/categories/categories-selectors';
import { addTransaction } from '../../../../redux/transactions/transactions-operations';
import Icons from '../../../Icons';
import customStyles from '../SelectInputStyles';
import 'react-datetime/css/react-datetime.css';
import 'moment/locale/ru';
import './AddTransaction.scss';

export default function AddTransaction() {
  const [selectedOption, setSelectedOption] = useState({
    value: null,
    label: '',
  });

  const [fullState, setFullState] = useState({
    checked: true,
    sum: '',
    date: moment().format('DD.MM.YYYY'),
    comment: '',
    boxShadow: '0px 6px 15px rgba(255, 101, 150, 0.5)',
  });

  const { checked, sum, date, comment, boxShadow } = fullState;
  const { value } = selectedOption;

  useEffect(() => {
    if (checked) {
      setFullState(prev => ({
        ...prev,
        boxShadow: '0px 6px 15px rgba(255, 101, 150, 0.5)',
      }));
      return;
    }

    setFullState(prev => ({
      ...prev,
      boxShadow: '0px 6px 15px rgba(36, 204, 167, 0.5)',
    }));
  }, [checked]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  const categories = useSelector(getAllCategories);

  const handleChange = e => {
    const { name, value } = e.target;

    setFullState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangeCheckbox = nextChecked => {
    setFullState(prev => ({
      ...prev,
      checked: nextChecked,
      value: null,
      label: '',
    }));
  };

  const handleChangeDate = e => {
    typeof e === 'string'
      ? setFullState(prev => ({
          ...prev,
          date: e,
        }))
      : setFullState(prev => ({
          ...prev,
          date: e.format('DD.MM.YYYY'),
        }));
  };

  const closeModal = useCallback(() => {
    dispatch(closeModalTransaction());
  }, [dispatch]);

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      const number = Number(sum);
      const convertedSum = number.toFixed(2);
      dispatch(
        addTransaction({
          date,
          month: date.slice(3, 5),
          year: date.slice(6),
          money: Number(convertedSum),
          comment,
          type: !checked ? 'income' : 'spend',
          category: value,
        }),
      );
      closeModal();
    },
    [checked, comment, date, value, sum, closeModal, dispatch],
  );

  const yesterday = moment().subtract(1, 'day');
  const valid = current => current.isAfter(yesterday);
  const inputProps = {
    className: 'input date__input',
  };

  let optionsIncome = [];
  let optionsSpend = [];

  const sort = array => {
    array.forEach(({ _id, name }) =>
      name === 'Регулярный доход' || name === 'Нерегулярный доход'
        ? optionsIncome.push({
            value: _id,
            label: name,
          })
        : optionsSpend.push({
            value: _id,
            label: name,
          }),
    );
  };
  sort(categories);

  return (
    <div className="add-transaction__wrapper">
      <h3 className="transaction__title">Добавить транзакцию</h3>

      <div className="transaction__wrapper">
        <form className="transaction__form" onSubmit={handleSubmit}>
          <div className="checkbox__wrapper">
            <span className={`checkbox__span ${!checked && 'active-income'}`}>
              Доход
            </span>
            <Switch
              name="checked"
              value={checked}
              onChange={handleChangeCheckbox}
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
                <Icons className="switch-icon__spend" id="spend-icon" />
              }
              uncheckedHandleIcon={
                <Icons className="add-transaction__icon" id="add-icon" />
              }
            />
            <span className={`checkbox__span ${checked && 'active-spend'}`}>
              Расход
            </span>
          </div>

          {checked && (
            <div className="select__wrapper">
              <Select
                name="selectedOption"
                onChange={setSelectedOption}
                options={optionsSpend}
                placeholder="Выберите категорию"
                styles={customStyles}
              />
              <Icons className="select__icon" id="arrow-icon" />
            </div>
          )}
          {!checked && (
            <div className="select__wrapper">
              <Select
                name="selectedOption"
                onChange={setSelectedOption}
                options={optionsIncome}
                placeholder="Выберите категорию"
                styles={customStyles}
              />
              <Icons className="select__icon" id="arrow-icon" />
            </div>
          )}

          <div className="form__wrapper">
            <label className="form__sum">
              <input
                name="sum"
                value={sum}
                onChange={handleChange}
                type="text"
                maxLength="6"
                className="input sum__input"
                placeholder="0.00"
              ></input>
            </label>

            <Datetime
              className="date__wrapper"
              locale="ru"
              initialValue={moment()}
              closeOnSelect={true}
              timeFormat={false}
              inputProps={inputProps}
              isValidDate={valid}
              onChange={handleChangeDate}
            />
            <Icons className="date__icon" id="calendar-icon" />
          </div>

          <label className="form__text">
            <input
              name="comment"
              value={comment}
              type="text"
              onChange={handleChange}
              className="input text__input"
              placeholder="Комментарий"
            ></input>
          </label>

          <button type="submit" className="transaction__button">
            Добавить
          </button>
          <button
            type="button"
            className="transaction__button transaction__button--cancel"
            onClick={closeModal}
          >
            Отмена
          </button>
        </form>
      </div>
    </div>
  );
}
