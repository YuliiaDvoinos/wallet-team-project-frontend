import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';
import 'moment/locale/ru';
import Select from 'react-select';
import Switch from 'react-switch';
import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalTransaction } from '../../../../redux/transactions/transactions-actions';
import { getCategories } from '../../../../redux/categories/categories-operations';
import { getAllCategories } from '../../../../redux/categories/categories-selectors';
import { addTransaction } from '../../../../redux/transactions/transactions-operations';
import Icons from '../../../Icons';
import customStyles from '../SelectInputStyles';
import './AddTransaction.scss';

export default function AddTransaction() {
  // selectedOption
  const [selectedOption, setSelectedOption] = useState({
    value: '',
    label: '',
  });
  // checked
  const [checked, setChecked] = useState(true);
  useEffect(() => {
    if (checked) {
      setBoxShadowHandle('0px 6px 15px rgba(255, 101, 150, 0.5)');
      return;
    }
    setBoxShadowHandle('0px 6px 15px rgba(36, 204, 167, 0.5)');
  }, [checked]);
  // boxShadow
  const [boxShadow, setBoxShadowHandle] = useState(
    '0px 6px 15px rgba(255, 101, 150, 0.5)',
  );
  // sum money
  const [sum, setSum] = useState('');
  // date
  const today = moment().format('DD.MM.YYYY');
  const [date, setDate] = useState(today);
  // comment
  const [comment, setComment] = useState('');

  // HANDLE
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  const categories = useSelector(getAllCategories);

  // change
  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'comment':
        setComment(value);
        break;

      case 'sum':
        setSum(value);
        break;

      case 'selectedOption':
        setSelectedOption(value);
        break;

      default:
        console.log('error');
    }
  };
  const handleChangeCheckbox = nextChecked => {
    setChecked(nextChecked);
  };
  const handleChangeDate = e => {
    setDate(e.format('DD.MM.YYYY'));
  };

  // modal close
  const closeModal = useCallback(() => {
    dispatch(closeModalTransaction());
  }, [dispatch]);

  // submit
  const handleSubmit = useCallback(
    event => {
      event.preventDefault();

      dispatch(
        addTransaction({
          date,
          month: date.slice(3, 5),
          year: date.slice(6),
          money: Number(sum),
          comment,
          type: !checked ? 'income' : 'spend',
          category: selectedOption.value,
        }),
      );
      closeModal();
    },
    [checked, comment, date, selectedOption.value, sum, closeModal, dispatch],
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
                value={selectedOption}
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
                value={selectedOption}
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
              name="text"
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
