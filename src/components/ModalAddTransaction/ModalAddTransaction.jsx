import { useDispatch } from 'react-redux';
import { useCallback, useState } from 'react';
import { closeModalTransaction } from '../../redux/transactions/transactions-actions';
import Datetime from 'react-datetime';
import Select from 'react-select';
import Switch from 'react-switch';
import Modal from '../Modal';
import Icons from '../Icons';
import customStyles from './selectInputStyles';
import 'react-datetime/css/react-datetime.css';
import 'moment/locale/ru';
import './ModalAddTransaction.scss';

export default function ModalAddTransaction() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [checked, setChecked] = useState(false);
  const handleChange = nextChecked => {
    setChecked(nextChecked);
  };

  const dispatch = useDispatch();
  const closeModal = useCallback(() => {
    return dispatch(closeModalTransaction());
  }, [dispatch]);

  const inputProps = {
    className: 'input date__input',
  };

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <Modal closeModal={closeModal}>
      <button
        type="button"
        className="close-modal__button"
        onClick={closeModal}
      >
        <Icons className="close-modal__icon" id="closeTransactionModal" />
      </button>
      <h3 className="transaction__title">Добавить транзакцию</h3>

      <div className="transaction__wrapper">
        <form className="transaction__form">
          <div className="checkbox__wrapper">
            <span
              className={`checkbox__span span-income ${
                !checked && 'active-income'
              }`}
            >
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
              checkedHandleIcon={
                <Icons className="switch-icon__spend" id="checkboxSpendIcon" />
              }
              uncheckedHandleIcon={
                <Icons className="add-transaction__icon" id="addTransaction" />
              }
            />
            <span
              className={`checkbox__span span-spend ${
                checked && 'active-spend'
              }`}
            >
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

        <button
          type="button"
          className="transaction-button transaction-button__add"
        >
          Добавить
        </button>
        <button
          type="button"
          className="transaction-button transaction-button__cancel"
        >
          Отмена
        </button>
      </div>
    </Modal>
  );
}
