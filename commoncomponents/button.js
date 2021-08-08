import ButtonStyle from "./commonComponentStyles/buttonStyle.module.css";
import Link from "next/link";

export default function Button(props) {
  const { btnName, btnClass, onSubmitHandler, btnLink } = props;
  let btnClassName = ButtonStyle.btnContainer;
  if (btnName === "Edit") {
    btnClassName = ButtonStyle.btnEdit;
  } else if (btnName === "Delete") {
    btnClassName = ButtonStyle.btnDelete;
  } else if (btnName === "Add") {
    btnClassName = ButtonStyle.btnAdd;
  }
  return (
    <Link href={btnLink}>
      <button onClick={onSubmitHandler} className={btnClassName}>
        {btnName}
      </button>
    </Link>
  );
}
