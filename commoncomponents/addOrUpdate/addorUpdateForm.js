import { useRef } from "react";
import Styles from "./addOrUpdateCardsStyles.module.css";
import Button from "../button";
import CONSTANTS from "../../utils/constants";

export default function AddOrUpdateForm(props) {
  const nameRef = useRef();
  const dateRef = useRef();
  const placeRef = useRef();
  const amountRef = useRef();
  const typeRef = useRef();
  const paymentOptionRef = useRef();
  const reasonRef = useRef();

  const data = {
    name: "",
    palceName: "",
    amount: "",
    type: "",
    date: "",
    paymentOption: "",
    reason: "",
  };

  return (
    <form className={Styles.fromModel}>
      <h3 className={Styles.cardHeader}>ADD NEW EXPENSE </h3>
      <div className={Styles.formContainer}>
        <div className={Styles.inputDiv}>
          <label className={Styles.labelName}>Name: </label>
          <input
            type="text"
            minLength="2"
            className={Styles.inputField}
            ref={nameRef}
            defaultValue={data.name}
          />
        </div>
        <div className={Styles.inputDiv}>
          <label className={Styles.labelName}>Place Name: </label>
          <input
            type="text"
            minLength="2"
            className={Styles.inputField}
            ref={placeRef}
            defaultValue={data.palceName}
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
          >
            <option value="credit">Credit</option>
            <option value="debit">Debit</option>
          </select>
        </div>
        <div className={Styles.inputDiv}>
          <label className={Styles.labelName}>Date:</label>
          <input
            type="date"
            minLength="2"
            className={Styles.inputField}
            ref={dateRef}
            defaultValue={data.date}
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
