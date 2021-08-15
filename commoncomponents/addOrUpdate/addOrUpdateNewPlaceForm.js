import { useRef } from "react";
import Styles from "./addOrUpdateCardsStyles.module.css";
import Button from "../button";
import CONSTANTS from "../../utils/constants";

export default function AddOrUpdateForm(props) {
  const { updateData } = props;
  const placeNameRef = useRef();
  const tripStartDateRef = useRef();
  const tripEndDateRef = useRef();
  const ocassionRef = useRef();

  let newExpenseData = {};

  function onChangeEventHandler() {
    newExpenseData = {
      placeName: placeNameRef.current.value,
      tripStarted: tripStartDateRef.current.value,
      tripEnded: tripEndDateRef.current.value,
      occassion: ocassionRef.current.value,
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
      amount: updateData.expenses[0].amount,
      type: updateData.expenses[0].type,
      tripStarted: updateData.tripStarted,
      tripEnded: updateData.tripEnded,
      paymentDate: updateData.expenses[0].paymentDate,
      paymentOption: updateData.expenses[0].paymentOption,
      reason: updateData.expenses[0].reason,
    };
  }

  return (
    <form className={Styles.fromModel} onSubmit={submitEventHanlder}>
      <h3 className={Styles.cardHeader}>ADD NEW PLACE </h3>
      <div className={Styles.formContainer}>
        <div className={Styles.inputDiv}>
          <label className={Styles.labelName}>Place Name: </label>
          <input
            type="text"
            minLength="2"
            className={Styles.inputField}
            ref={placeNameRef}
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
          <label className={Styles.labelName}>Ocassion :</label>
          <input
            type="date"
            minLength="2"
            className={Styles.inputField}
            ref={ocassionRef}
            defaultValue={data.occassion}
            onChange={onChangeEventHandler}
          />
        </div>
      </div>
      <div className={Styles.btnSection}>
        <div>
          <Button btnName={CONSTANTS.ADD_NEW_EXPENSE_BTN} />
        </div>
        <div>
          <Button btnName={CONSTANTS.CANCEL_BTN} />
        </div>
      </div>
    </form>
  );
}
