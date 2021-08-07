import { Fragment } from "react";
import Styles from "../styles/Home.module.css";
import NavBar from "./navBar";
export default function Layout(props) {
  return (
    <Fragment>
      <div className={Styles.layout}>
        <NavBar />
        <main>{props.children}</main>
      </div>
    </Fragment>
  );
}
