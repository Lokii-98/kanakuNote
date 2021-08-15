import { useRef } from "react";
import Styles from "./addOrUpdateCardsStyles.module.css";
import Button from "../button";
import CONSTANTS from "../../utils/constants";

export default function AddOrUpdateForm(props) {
  const { updateData } = props;
  const nameRef = useRef();
  const paymentDateRef = useRef();
  const tripStartDateRef = useRef();
  const tripEndDateRef = useRef();
  const placeRef = useRef();
  const amountRef = useRef();
  const typeRef = useRef();
  const paymentOptionRef = useRef();
  const reasonRef = useRef();

  let data = {
    name: "",
    placeName: "",
    amount: "",
    type: "",
    date: "",
    paymentOption: "",
    reason: "",
  };
  let newExpenseData = {};

  function onChangeEventHandler() {
    newExpenseData = {
      placeName: placeRef.current.value,
      userName: nameRef.current.value,
      tripStarted: tripStartDateRef.current.value,
      tripEnded: tripEndDateRef.current.value,
      paymentDate: paymentDateRef.current.value,
      amount: amountRef.current.value,
      type: typeRef.current.value,
      reason: reasonRef.current.value,
      paymentOption: paymentOptionRef.current.value,
    };
    console.log("New Data: ", newExpenseData);
  }

  function submitEventHanlder(event) {
    event.preventDefault();
    props.dataHandler(newExpenseData);
  }
  if (updateData) {
    data = {
      name: updateData.userName,
      placeName: updateData.placeName,
      amount: updateData.amount,
      type: updateData.type,
      tripStarted: updateData.tripStarted,
      tripEnded: updateData.tripEnded,
      paymentDate: updateData.paymentDate,
      paymentOption: updateData.paymentOption,
      reason: updateData.reason,
    };
  }
  let cardHeader = updateData
    ? CONSTANTS.CARD_HEADER_EDIT_EXPENSE
    : CONSTANTS.CARD_HEADER_ADD_EXPENSE;
  return (
    <form className={Styles.fromModel} onSubmit={submitEventHanlder}>
      <h3 className={Styles.cardHeader}>{cardHeader} </h3>
      <div className={Styles.formContainer}>
        <div className={Styles.inputDiv}>
          <label className={Styles.labelName}>Name: </label>
          <input
            type="text"
            minLength="2"
            className={Styles.inputField}
            ref={nameRef}
            defaultValue={data.name}
            onChange={onChangeEventHandler}
          />
        </div>
        <div className={Styles.inputDiv}>
          <label className={Styles.labelName}>Place Name: </label>
          <input
            type="text"
            minLength="2"
            className={Styles.inputField}
            ref={placeRef}
            defaultValue={data.placeName}
            onChange={onChangeEventHandler}
          />
        </div>
        <div className={Styles.inputDiv}>
          <label className={Styles.labelName}>Trip Started on:</label>
          <input
            type="date"
            minLength="2"
            className={Styles.inputField}
            ref={tripStartDateRef}
            defaultValue={data.tripStarted}
            onChange={onChangeEventHandler}
          />
        </div>
        <div className={Styles.inputDiv}>
          <label className={Styles.labelName}>Trip Ended on:</label>
          <input
            type="date"
            minLength="2"
            className={Styles.inputField}
            ref={tripEndDateRef}
            defaultValue={data.tripEnded}
            onChange={onChangeEventHandler}
          />
        </div>
        <div className={Styles.inputDiv}>
          <label className={Styles.labelName}>Amount: </label>
          <input
            type="number"
            minLength="2"
            className={Styles.inputField}
            ref={amountRef}
            defaultValue={data.amount}
            onChange={onChangeEventHandler}
          />
        </div>
        <div className={Styles.inputDiv}>
          <label htmlFor="paymentType" className={Styles.labelName}>
            Type:
          </label>
          <select
            id="paymentType"
            ref={typeRef}
            defaultValue={data.type}
            className={Styles.inputField}
            onChange={onChangeEventHandler}
          >
            <option value="Credit">Credit</option>
            <option value="Debit">Debit</option>
          </select>
        </div>
        <div className={Styles.inputDiv}>
          <label className={Styles.labelName}>Payment Date:</label>
          <input
            type="date"
            minLength="2"
            className={Styles.inputField}
            ref={paymentDateRef}
            defaultValue={data.paymentDate}
            onChange={onChangeEventHandler}
          />
        </div>

        <div className={Styles.inputDiv}>
          <label className={Styles.labelName}>Paid For: </label>
          <input
            type="text"
            minLength="2"
            className={Styles.inputField}
            ref={reasonRef}
            defaultValue={data.reason}
            onChange={onChangeEventHandler}
          />
        </div>
        <div className={Styles.inputDiv}>
          <label className={Styles.labelName}>PaymentOption: </label>
          <input
            type="text"
            minLength="2"
            className={Styles.inputField}
            ref={paymentOptionRef}
            defaultValue={data.paymentOption}
            onChange={onChangeEventHandler}
          />
        </div>
      </div>
      <div className={Styles.btnSection}>
        <div>
          <Button
            btnName={
              updateData ? CONSTANTS.UPDATE : CONSTANTS.ADD_NEW_EXPENSE_BTN
            }
          />
        </div>
        <div>
          <Button btnName={CONSTANTS.CANCEL_BTN} />
        </div>
      </div>
    </form>
  );
}
