import ButtonStyle from "./commonComponentStyles/buttonStyle.module.css";
import Link from "next/link";
import CONSTANTS from "../utils/constants";
import { useContext } from "react";
import ButtonContext from "../store/button-context";

export default function Button(props) {
  const { btnName, btnLink, onClickHandler } = props;

  const btnContext = useContext(ButtonContext);
  const renderGreenBtn = [
    CONSTANTS.ADD_NEW_PLACE_BTN,
    CONSTANTS.ADD_NEW_EXPENSE_BTN,
    CONSTANTS.ADD_NEW_USER_BTN,
    CONSTANTS.UPDATE,
  ];
  const renderBlueBtn = [CONSTANTS.EDIT_BTN];
  const renderRedBtn = [CONSTANTS.DELETE_USER_DATA, CONSTANTS.DELETE_BTN];
  let btnClassName = ButtonStyle.btnContainer;
  if (renderBlueBtn.includes(btnName)) {
    btnClassName = ButtonStyle.btnEdit;
  } else if (renderRedBtn.includes(btnName)) {
    btnClassName = ButtonStyle.btnDelete;
  } else if (renderGreenBtn.includes(btnName)) {
    btnClassName = ButtonStyle.btnAdd;
  } else if (btnName === CONSTANTS.CANCEL_BTN) {
    btnClassName = ButtonStyle.btnCancel;
  }

  const onClickFunction =
    props.onClickHandler !== undefined
      ? props.onClickHandler
      : onClickBtnHandler;

  function onClickBtnHandler(event) {
    console.log("btnclicked", event.target.name);
    if (event.target.name === CONSTANTS.EDIT_BTN) {
      btnContext.dispatchButtonEventData({
        clickedBtnName: event.target.name,
        editDataId: event.target.id,
      });
      console.log(btnName, "Edit btn clicked", event.target.id);
    } else if (event.target.name === CONSTANTS.DELETE_BTN) {
      btnContext.dispatchButtonEventData({
        clickedBtnName: event.target.name,
        editDataId: event.target.id,
      });
    } else if (event.target.name === CONSTANTS.CANCEL_BTN) {
      btnContext.dispatchButtonEventData({
        clickedBtnName: event.target.name,
        editDataId: event.target.id,
      });
    }
  }

  if (btnLink) {
    return (
      <Link href={btnLink}>
        <button onClick={onClickFunction} className={btnClassName}>
          {btnName}
        </button>
      </Link>
    );
  } else {
    return (
      <div>
        <button
          onClick={onClickFunction}
          className={btnClassName}
          id={props.id}
          name={btnName}
        >
          {btnName}
        </button>
      </div>
    );
  }
}
