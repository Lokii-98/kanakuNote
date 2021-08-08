import CONSTANTS from "./constants";

export const getExpenseData = (expenseData, expenseType) => {
  console.log(expenseData, "Expense Data");
  if (expenseType === CONSTANTS.EXPENSE_TYPE_CREDIT) {
    const creditArray = expenseData.expenses.filter(
      (expense) => expense.type.toLowerCase() === "credit"
    );
    return creditArray;
  }
  if (expenseType === CONSTANTS.EXPENSE_TYPE_DEBIT) {
    const debitArray = expenseData.expenses.filter(
      (expense) => expense.type.toLowerCase() === "debit"
    );
    return debitArray;
  }
};

export const getTotalAmount = (amountArray) => {
  let totalAmount = 0;
  amountArray.map((amountObj) => {
    totalAmount = totalAmount + parseInt(amountObj.amount);
  });
  return totalAmount;
};
