import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Datetime from 'react-datetime';
import moment from 'moment';
// import { closeModalTransaction } from '../../../../redux/transactions/transactions-actions';
import Select from 'react-select';
import Switch from 'react-switch';
import Icons from '../../../Icons';
import customStyles from '../SelectInputStyles';
import 'react-datetime/css/react-datetime.css';
import 'moment/locale/ru';
import './AddTransaction.scss';
import operations from '../../../../redux/categories/categories-operations';
import categoriesSelectors from '../../../../redux/categories/categories-selectors';

export default function AddTransaction(closeModalTransaction) {

  const [selectedOption, setSelectedOption] = useState(null);
  const [checked, setChecked] = useState(true);
  const [boxShadow, setBoxShadowHandle] = useState(
    '0px 6px 15px rgba(255, 101, 150, 0.5)',
  );
  // const [checked, setChecked] = useState(true);

  const handleChange = nextChecked => {
    setChecked(nextChecked);
  };

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
            <Icons className="date__icon" id="calendar-icon" />
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
          onClick={closeModalTransaction}
        >
          Отмена
        </button>
      </div>
    </div>
  );
}
