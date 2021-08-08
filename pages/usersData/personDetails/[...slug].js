import ExpenseTable from "../../../commoncomponents/dynamicTable/expenseTable";
import CONSTANTS from "../../../utils/constants";
import { getExpenseData, getTotalAmount } from "../../../utils/expensesUtils";
import tableStyle from "../../../commoncomponents/commonComponentStyles/expenseTableStyle.module.css";
import Button from "../../../commoncomponents/button";
import ButtonContext from "../../../store/button-context";
import { useContext, useState } from "react";
import AddOrUpdateCards from "../../../commoncomponents/addOrUpdate/addOrUpdateCard";
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
      {
        date: "25-04-2021",
        reason: "Food",
        paymentOption: "Cash",
        amount: "700",
        type: "Credit",
      },
      {
        amount: "680",
        date: "25-04-2021",
        reason: "Food",
        paymentOption: "Cash",
        type: "Debit",
      },
      {
        amount: "680",
        date: "25-04-2021",
        reason: "Food",
        paymentOption: "Cash",
        type: "Debit",
      },
      {
        amount: "680",
        date: "25-04-2021",
        reason: "Food",
        paymentOption: "Cash",
        type: "Credit",
      },
    ],
    balanceWithMe: "150",
  };
  let buttonCtx = useContext(ButtonContext);
  const [openAddModel, setOpenAddModel] = useState(false);
  let creditData = getExpenseData(expenseData, CONSTANTS.EXPENSE_TYPE_CREDIT);
  let debitData = getExpenseData(expenseData, CONSTANTS.EXPENSE_TYPE_DEBIT);
  let totalCreditedAmount = getTotalAmount(creditData);
  let totalDebitedAmount = getTotalAmount(debitData);
  let totalBalance = totalCreditedAmount - totalDebitedAmount;
  console.log(
    "FileName - ExpenseTable",
    "CreditData -",
    creditData,
    "DebitData -",
    debitData
  );

  if (
    buttonCtx.isAddExpenseModel &&
    buttonCtx.isAddExpenseModel.modelName === CONSTANTS.ADD_NEW_EXPENSE_BTN
  ) {
    console.log("Add new expense btn is clicked");
    return <AddOrUpdateCards />;
  }

  return (
    <div>
      <div className={tableStyle.expenseTableContainer}>
        <div className={tableStyle.headerName}>{expenseData.userName}</div>
        <div className={tableStyle.headerContainer}>
          <div>
            <label className={tableStyle.label}>Total Amount Credited:</label>
            {totalCreditedAmount}
          </div>
          <div>
            <label className={tableStyle.label}>Total Amount Debited: </label>
            {totalDebitedAmount}
          </div>
          <div>
            <label className={tableStyle.label}>Total Balance:</label>{" "}
            {totalBalance}
          </div>
        </div>
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
          <Button btnName={CONSTANTS.ADD_NEW_EXPENSE_BTN} />
        </div>
      </div>
    </div>
  );
}
