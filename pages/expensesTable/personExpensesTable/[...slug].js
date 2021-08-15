import ExpenseTable from "../../../commoncomponents/dynamicTable/expenseTable";
import CONSTANTS from "../../../utils/constants";
import {
  getDataToBeEdited,
  getExpenseData,
  getTotalAmount,
  getUserExpenseData,
} from "../../../utils/expensesUtils";
import tableStyle from "../../../commoncomponents/commonComponentStyles/expenseTableStyle.module.css";
import Button from "../../../commoncomponents/button";
import { useContext, useEffect, useState } from "react";
import AddOrUpdateCards from "../../../commoncomponents/addOrUpdate/addOrUpdateCard";
import { useRouter } from "next/dist/client/router";
import ButtonContext from "../../../store/button-context";
export default function UserId() {
  const router = useRouter();
  const urlData = router.query.slug;
  const userNameFromUrl = urlData && urlData[0];
  const palceIdFromUrl = urlData && urlData[1];
  const tableHeaders = [
    "Amount",
    "Payment Date",
    "Reason",
    "Payment Mode",
    "Action",
  ];
  const expenseData = [
    {
      _id: "E01",
      placeName: "Coorg",
      placeId: "Coorg01",
      userName: "Magesh",
      tripStarted: "2021-04-24",
      tripEnded: "2021-04-28",
      expenses: [
        {
          paymentDate: "2021-04-24",
          reason: "Food",
          paymentOption: "Cash",
          amount: "500",
          type: "Credit",
          expenseId: "MCC01",
        },
        {
          amount: "480",
          paymentDate: "2021-04-24",
          reason: "Food",
          paymentOption: "Cash",
          type: "Debit",
          expenseId: "MDC01",
        },
        {
          paymentDate: "2021-04-25",
          reason: "Food",
          paymentOption: "Cash",
          amount: "700",
          type: "Credit",
          expenseId: "MCC02",
        },
        {
          amount: "680",
          paymentDate: "2021-04-25",
          reason: "Food",
          paymentOption: "Cash",
          type: "Debit",
          expenseId: "MDC02",
        },
        {
          amount: "680",
          paymentDate: "2021-04-25",
          reason: "Food",
          paymentOption: "Cash",
          type: "Debit",
          expenseId: "MDC03",
        },
        {
          amount: "680",
          paymentDate: "2021-04-25",
          reason: "Food",
          paymentOption: "Cash",
          type: "Credit",
          expenseId: "MCC03",
        },
      ],
      balanceWithMe: "150",
    },
  ];
  const btnContext = useContext(ButtonContext);
  let btnEvents = btnContext.btnEventData;
  useEffect(() => {
    if (btnEvents && btnEvents.clickedBtnName === CONSTANTS.CANCEL_BTN) {
      // console.log("cancel btn clicked");
      setOpenAddModel(false);
    }
  }, [btnEvents]);
  const [openAddModel, setOpenAddModel] = useState(false);
  const [userExpenseId, setUserExpenseId] = useState("");
  const [newExpenseData, setNewExpenseData] = useState({});
  let expenseDataArray = [];
  let creditData = [];
  let debitData = [];
  expenseDataArray = getUserExpenseData(
    expenseData,
    palceIdFromUrl,
    userNameFromUrl
  );
  // console.log("Expense DAta Array inside slug", expenseDataArray, "line 84");
  creditData = getExpenseData(expenseDataArray, CONSTANTS.EXPENSE_TYPE_CREDIT);
  debitData = getExpenseData(expenseDataArray, CONSTANTS.EXPENSE_TYPE_DEBIT);
  let totalCreditedAmount = getTotalAmount(creditData);
  let totalDebitedAmount = getTotalAmount(debitData);
  let totalBalance = totalCreditedAmount - totalDebitedAmount;
  // console.log(
  //   "FileName - ExpenseTableslug",
  //   "CreditData -",
  //   creditData,
  //   "DebitData -",
  //   debitData
  // );

  // console.log("urlData for expense table", urlData);
  if (
    openAddModel ||
    (btnEvents &&
      btnEvents.clickedBtnName === CONSTANTS.EDIT_BTN &&
      !(btnEvents && btnEvents.clickedBtnName === CONSTANTS.CANCEL_BTN))
  ) {
    let dataToCard = {};
    if (btnEvents && btnEvents.clickedBtnName === CONSTANTS.EDIT_BTN) {
      // console.log(
      //   "Add new expense btn is clicked for one validaition",
      //   btnEvents
      // );
      dataToCard = getDataToBeEdited(btnEvents.editDataId, expenseData);
    }
    return (
      <AddOrUpdateCards
        dataHandler={addNewExpenseDataHandler}
        id={userExpenseId}
        updateData={dataToCard}
      />
    );
  }

  function addNewExpenseDataHandler(expenseData) {
    let expenseDataToDb = {
      placeName: expenseData.placeName,
      placeId: palceIdFromUrl,
      userName: expenseData.userName,
      tripStarted: expenseData.tripStarted,
      tripEnded: expenseData.tripEnded,
      expenses: {
        paymentDate: expenseData.paymentDate,
        reason: expenseData.reason,
        paymentOption: expenseData.paymentOption,
        amount: expenseData.amount,
        type: expenseData.type,
      },
    };
    // console.log("New Expense Data ", expenseDataToDb);
  }

  function addNewExpenseHandler(event) {
    // console.log("btn click handler", event.target.id);
    setOpenAddModel(true);
    setUserExpenseId(event.target.id);
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
            <ExpenseTable
              tableData={creditData}
              tableHeaders={tableHeaders}
              tableName={CONSTANTS.EXPENSE_TABLE_NAME}
            />
          </div>
          <div className={tableStyle.innerContainer}>
            <div className={tableStyle.labelName}>
              <label className={tableStyle.label}>Type: </label>
              {CONSTANTS.EXPENSE_TYPE_DEBIT}
            </div>
            <ExpenseTable
              tableData={debitData}
              tableHeaders={tableHeaders}
              tableName={CONSTANTS.EXPENSE_TABLE_NAME}
            />
          </div>
        </div>
        <div className={tableStyle.addButton}>
          <Button
            btnName={CONSTANTS.ADD_NEW_EXPENSE_BTN}
            onClickHandler={addNewExpenseHandler}
            id={expenseData.placeId}
          />
        </div>
      </div>
    </div>
  );
}
