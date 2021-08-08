// import { Fragment } from "react";
// import CONSTANTS from "../../utils/constants";
// import { getExpenseData } from "../../utils/expensesUtils";
// import ExpenseTableStyle from "./commonComponentStyles/expenseTableStyle.module.css";
import TableBody from "./tableBody";
import TableHeaders from "./tableHeader";

export default function ExpenseTable(props) {
  const tableHeaders = ["Amount", "Date", "Reason", "Payment Mode", "Action"];

  return (
    <form>
      <table>
        <TableHeaders headerData={tableHeaders} />
        <TableBody bodyData={props.tableData} />
      </table>
    </form>
  );
}
