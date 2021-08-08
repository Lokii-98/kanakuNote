import ButtonStyle from "./commonComponentStyles/buttonStyle.module.css";
import Link from "next/link";
import { useContext } from "react";
import ButtonContext from "../store/button-context";
import CONSTANTS from "../utils/constants";

export default function Button(props) {
  const { btnName, onSubmitHandler, btnLink } = props;
  let btnClassName = ButtonStyle.btnContainer;
  if (btnName === CONSTANTS.EDIT_BTN) {
    btnClassName = ButtonStyle.btnEdit;
  } else if (
    btnName === CONSTANTS.DELETE_BTN ||
    btnName === CONSTANTS.DELETE_USER_DATA
  ) {
    btnClassName = ButtonStyle.btnDelete;
  } else if (
    btnName === CONSTANTS.ADD_NEW_EXPENSE_BTN ||
    btnName === CONSTANTS.ADD_NEW_USER_BTN
  ) {
    btnClassName = ButtonStyle.btnAdd;
  } else if (btnName === CONSTANTS.CANCEL_BTN) {
    btnClassName = ButtonStyle.btnCancel;
  }

  const ButtonCtx = useContext(ButtonContext);

  function addSubmitHandler() {
    ButtonCtx.dispatchAddExpense({
      openModel: true,
      modelName: btnName,
    });
  }

  if (btnLink) {
    return (
      <Link href={btnLink}>
        <button onClick={onSubmitHandler} className={btnClassName}>
          {btnName}
        </button>
      </Link>
    );
  } else {
    return (
      <div>
        <button onClick={addSubmitHandler} className={btnClassName}>
          {btnName}
        </button>
      </div>
    );
  }
}
