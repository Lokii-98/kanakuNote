import { Fragment } from "react";
import ExpenseTable from "../../../commoncomponents/dynamicTable/expenseTable";
import CONSTANTS from "../../../utils/constants";
import { getExpenseData } from "../../../utils/expensesUtils";
import tableStyle from "../../../commoncomponents/commonComponentStyles/expenseTableStyle.module.css";
import Button from "../../../commoncomponents/button";
export default function UserId() {
  const expenseData = {
    _id: "E01",
    placeName: "Coorg",
    placeId: "Coorg01",
    userName: "Magesh",
    visitedOn: "24-04-2021",
    expenses: [
      {
        date: "24-04-2021",
        reason: "Food",
        paymentOption: "Cash",
        amount: "500",
        type: "Credit",
      },
      {
        amount: "480",
        date: "24-04-2021",
        reason: "Food",
        paymentOption: "Cash",
        type: "Debit",
      },
    ],
    balanceWithMe: "150",
  };

  let creditData = getExpenseData(expenseData, CONSTANTS.EXPENSE_TYPE_CREDIT);
  let debitData = getExpenseData(expenseData, CONSTANTS.EXPENSE_TYPE_DEBIT);
  console.log(
    "FileName - ExpenseTable",
    "CreditData -",
    creditData,
    "DebitData -",
    debitData
  );

  return (
    <Fragment>
      <div className={tableStyle.expenseTableContainer}>
        <div className={tableStyle.headerLabelName}>{expenseData.userName}</div>
        <div className={tableStyle.mainContainer}>
          <div className={tableStyle.innerContainer}>
            <div className={tableStyle.labelName}>
              <label className={tableStyle.label}>Type: </label>
              {CONSTANTS.EXPENSE_TYPE_CREDIT}
            </div>
            <ExpenseTable tableData={creditData} />
          </div>
          <div className={tableStyle.innerContainer}>
            <div className={tableStyle.labelName}>
              <label className={tableStyle.label}>Type: </label>
              {CONSTANTS.EXPENSE_TYPE_DEBIT}
            </div>
            <ExpenseTable tableData={debitData} />
          </div>
        </div>
        <div className={tableStyle.addButton}>
          <Button btnName={"Add"} btnLink={"/"} />
        </div>
      </div>
    </Fragment>
  );
}
