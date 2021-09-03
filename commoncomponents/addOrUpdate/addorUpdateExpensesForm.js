import { useRef } from "react";
import Styles from "./addOrUpdateCardsStyles.module.css";
import Button from "../button";
import CONSTANTS from "../../utils/constants";
import { getUserDataById } from "../../utils/commonUtils";

export default function AddOrUpdateForm(props) {
  const dummyData = [
    {
      _id: "",
      userId: "Magesh4321",
      name: "Magesh",
    },
    {
      _id: "",
      userId: "Joseph4321",
      name: "Joseph",
    },
  ];
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
  const ocassionRef = useRef();
  const newUserRef = useRef();

  const isAddPlaceCardOpen =
    props.cardName && props.cardName === CONSTANTS.ADD_NEW_PLACE_BTN;
  const isAddNewExpenseCardOpen =
    props.cardName && props.cardName === CONSTANTS.ADD_NEW_EXPENSE_BTN;
  const isAddNewUserCardOpen =
    props.cardName && props.cardName === CONSTANTS.ADD_NEW_USER_BTN;

  let data = {
    name: "",
    placeName: "",
    amount: "",
    type: "",
    date: "",
    paymentOption: "",
    reason: "",
  };
  let newData = {};

  function onChangeEventHandler() {
    if (newUserRef.current && newUserRef.current.value) {
      const getUserData = getUserDataById(newUserRef.current.value, dummyData);
      console.log(getUserData ? getUserData : "", "userdata after added");
      newData = {
        newUser: getUserData[0],
      };
    } else {
      newData = {
        placeName: placeRef.current && placeRef.current.value,
        userName: nameRef.current && nameRef.current.value,
        tripStarted: tripStartDateRef.current && tripStartDateRef.current.value,
        tripEnded: tripEndDateRef.current && tripEndDateRef.current.value,
        paymentDate: paymentDateRef.current && paymentDateRef.current.value,
        amount: amountRef.current && amountRef.current.value,
        type: typeRef.current && typeRef.current.value,
        reason: reasonRef.current && reasonRef.current.value,
        paymentOption:
          paymentOptionRef.current && paymentOptionRef.current.value,
        occassion: ocassionRef.current && ocassionRef.current.value,
      };
    }
    console.log("New Data: ", newData);
  }

  function submitEventHanlder(event) {
    event.preventDefault();
    props.dataHandler(newData);
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
      occassion: updateData.occassion,
    };
  }

  let cardHeader = props.cardName
    ? props.cardName.toUpperCase()
    : "DATA's CARD";

  // if (isAddNewUserCardOpen) {
  //   return (
  //     <form className={Styles.fromModel} onSubmit={submitEventHanlder}>
  //       <h3 className={Styles.cardHeader}>{cardHeader} </h3>
  //       <div className={Styles.formContainer}>
  //         <div className={Styles.inputDiv}>
  //           <label className={Styles.labelName}>Select a new user: </label>
  //           <select
  //             id="newUser"
  //             ref={newUserRef}
  //             className={Styles.inputField}
  //             onChange={onChangeEventHandler}
  //           >
  //             {dummyData.map((userData) => {
  //               return <option value={userData.userId}>{userData.name}</option>;
  //             })}
  //           </select>
  //         </div>
  //       </div>
  //     </form>
  //   );
  // }
  return (
    <form className={Styles.fromModel} onSubmit={submitEventHanlder}>
      <h3 className={Styles.cardHeader}>{cardHeader} </h3>
      <div className={Styles.formContainer}>
        {isAddNewUserCardOpen && (
          <div className={Styles.inputDiv}>
            <label className={Styles.labelName}>Select a new user: </label>
            <select
              id="newUser"
              ref={newUserRef}
              className={Styles.inputField}
              onChange={onChangeEventHandler}
            >
              {dummyData.map((userData) => {
                return <option value={userData.userId}>{userData.name}</option>;
              })}
            </select>
          </div>
        )}
        {isAddNewExpenseCardOpen && (
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
        )}
        {!isAddNewUserCardOpen && (
          <>
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
          </>
        )}
        {isAddNewExpenseCardOpen && (
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
        )}
        {isAddNewExpenseCardOpen && (
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
        )}
        {isAddNewExpenseCardOpen && (
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
        )}

        {isAddNewExpenseCardOpen && (
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
        )}
        {isAddNewExpenseCardOpen && (
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
        )}
        {isAddPlaceCardOpen && (
          <div className={Styles.inputDiv}>
            <label className={Styles.labelName}>occasion: </label>
            <input
              type="text"
              minLength="2"
              className={Styles.inputField}
              ref={ocassionRef}
              defaultValue={data.paymentOption}
              onChange={onChangeEventHandler}
            />
          </div>
        )}
      </div>
      <div className={Styles.btnSection}>
        <div>
          <Button
            btnName={
              updateData ? CONSTANTS.UPDATE : props.cardName && props.cardName
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
