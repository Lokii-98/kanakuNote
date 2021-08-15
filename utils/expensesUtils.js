import CONSTANTS from "./constants";

export const getUserExpenseData = (expenseData, userExpenseId, userName) => {
  console.log(expenseData, "getUserExpenseData");

  const userDataArray = expenseData.filter(
    (dataObj) => dataObj.userName === userName
  );
  const userExpenseDataArray = userDataArray.filter(
    (data) => data.placeId === userExpenseId
  );
  return userExpenseDataArray;
};

export const getExpenseData = (expenseData, expenseType) => {
  console.log(expenseData, "filter credit or debit Expense Data", expenseType);
  let expensesArray;
  expenseData.map(
    (expenseObj) =>
      (expensesArray = expenseObj.expenses.filter(
        (expense) => expense.type.toLowerCase() === expenseType.toLowerCase()
      ))
  );
  return expensesArray;
};

export const getTotalAmount = (amountArray) => {
  let totalAmount = 0;
  amountArray &&
    amountArray.map((amountObj) => {
      totalAmount = totalAmount + parseInt(amountObj.amount);
    });
  return totalAmount;
};

export const getDataToBeEdited = (dataId, expenseDataArray) => {
  let editDataObj = {};
  expenseDataArray.map((dataObjwithExpenseArray) => {
    editDataObj.userName = dataObjwithExpenseArray.userName;
    editDataObj.placeId = dataObjwithExpenseArray.placeId;
    editDataObj.tripStarted = dataObjwithExpenseArray.tripStarted;
    editDataObj.tripEnded = dataObjwithExpenseArray.tripEnded;
    editDataObj.placeName = dataObjwithExpenseArray.placeName;
    dataObjwithExpenseArray.expenses.map((expensesObj) => {
      if (expensesObj.expenseId === dataId) {
        editDataObj.paymentDate = expensesObj.paymentDate;
        editDataObj.reason = expensesObj.reason;
        editDataObj.paymentOption = expensesObj.paymentOption;
        editDataObj.amount = expensesObj.amount;
        editDataObj.type = expensesObj.type;
      }
    });
  });
  console.log("Function getdataToBeEdited", editDataObj);

  return editDataObj;
};
