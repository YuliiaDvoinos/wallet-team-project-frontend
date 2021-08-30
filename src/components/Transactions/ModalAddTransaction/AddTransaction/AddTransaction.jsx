import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Datetime from 'react-datetime';
import moment from 'moment';
import {
  closeModalTransaction,
  // addNewTransaction,
} from '../../../../redux/transactions/transactions-actions';
import Select from 'react-select';
import Switch from 'react-switch';
import Icons from '../../../Icons';
import customStyles from '../SelectInputStyles';
import 'react-datetime/css/react-datetime.css';
import 'moment/locale/ru';
import './AddTransaction.scss';
import operations from '../../../../redux/categories/categories-operations';
import categoriesSelectors from '../../../../redux/categories/categories-selectors';
import operationsTransactions from '../../../../redux/transactions/transactions-operations';

export default function AddTransaction() {
  const today = moment().format('DD.MM.YYYY');

  const [selectedOption, setSelectedOption] = useState({
    value: '',
    label: '',
  });
  const [checked, setChecked] = useState(true);
  const [sum, setSum] = useState('');
  const [date, setDate] = useState(today);
  const [text, setText] = useState('');
  const [boxShadow, setBoxShadowHandle] = useState(
    '0px 6px 15px rgba(255, 101, 150, 0.5)',
  );

  const [statefull, setStateFull] = useState({});

  const dispatch = useDispatch();
  const closeTransaction = useCallback(() => {
    return dispatch(closeModalTransaction());
  }, [dispatch]);

  const handleChangeCheckbox = nextChecked => {
    setChecked(nextChecked);
  };

  const handleChangeDate = e => {
    setDate(e.format('DD.MM.YYYY'));
  };

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'text':
        setText(value);
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

  const handleSubmit = useCallback(() => {
    const month = date.slice(3, 5);
    const year = date.slice(6);
    const money = Number(sum);
    const category = selectedOption.value;
    const type = !checked ? 'income' : 'spend';

    setStateFull({
      date: date,
      month,
      year,
      comment: text,
      type,
      category,
      money,
    });

    console.log(statefull);
    dispatch(operationsTransactions.addTransaction(statefull));
    // // dispatch(addNewTransaction(statefull));
    // closeTransaction();
  }, [
    date,
    text,
    checked,
    selectedOption,
    sum,
    statefull,
    // closeTransaction,
    dispatch,
  ]);

  useEffect(() => {
    if (checked) {
      setBoxShadowHandle('0px 6px 15px rgba(255, 101, 150, 0.5)');
      return;
    }

    setBoxShadowHandle('0px 6px 15px rgba(36, 204, 167, 0.5)');
  }, [checked]);

  const yesterday = moment().subtract(1, 'day');
  const valid = current => current.isAfter(yesterday);
  const inputProps = {
    className: 'input date__input',
  };

  //----------------------------------------------------------------------------------------
  //----------------------------------------------------------------------------------------
  // const categoryAdapter = ({
  //   main,
  //   food,
  //   car,
  //   development,
  //   children,
  //   house,
  //   education,
  //   leisure,
  //   other,
  //   regularIncome,
  //   irregularIncome,
  // }) => ({});
  const { fetchCategories } = operations;
  const { getAllCategories } = categoriesSelectors;
  const categories = useSelector(getAllCategories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch, fetchCategories]);
  //
  // let n = [];
  // const renameCategories = name => {
  //   switch (name) {
  //     case 'main':
  //       n.push('Машина');
  //       break;
  //   }
  // };

  // console.log(n);

  let optionsIncome = [];
  let optionsSpend = [];

  const sort = array => {
    array.forEach(({ _id, name }) =>
      name === 'regularIncome' || name === 'irregularIncome'
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

  //-----------------------------------------------------------------------------------------
  //----------------------------------------------------------------------------------------
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
              value={text}
              type="text"
              onChange={handleChange}
              className="input text__input"
              placeholder="Комментарий"
            ></input>
          </label>
        </form>

        <button
          type="button"
          className="transaction__button"
          onClick={handleSubmit}
        >
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
