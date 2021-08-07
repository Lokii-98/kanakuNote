import ButtonStyle from "./commonComponentStyles/buttonStyle.module.css";
import Link from "next/link";

export default function Button(props) {
  const { btnName, btnClass, onSubmitHandler, btnLink } = props;
  let btnClassName = btnClass ? btnClass : ButtonStyle.btnContainer;
  return (
    <Link href={btnLink}>
      <button onClick={onSubmitHandler} className={btnClassName}>
        {btnName}
      </button>
    </Link>
  );
}
