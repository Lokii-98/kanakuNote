import Link from "next/link";
import NavBarStyles from "./commonComponentStyles/navBarStyles.module.css";

export default function NavBar() {
  return (
    <header className={NavBarStyles.navHeader}>
      <div className={NavBarStyles.navLogo}>
        {" "}
        <Link href="/">Kanaku Note</Link>
      </div>
      <ul className={NavBarStyles.navUL}>
        <li className={NavBarStyles.navLI}>
          {" "}
          <Link href="../usersData/personDetails">Person's List</Link>
        </li>

        <li className={NavBarStyles.navLI}>
          {" "}
          <Link href="../expensesTable">Expense Tables</Link>
        </li>

        <li className={NavBarStyles.navLI}>
          {" "}
          <Link href="/">Login</Link>
        </li>
      </ul>
    </header>
  );
}
