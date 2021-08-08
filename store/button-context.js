import { createContext, useState } from "react";

const ButtonContext = createContext({
  isAddExpenseModel: null,
  dispatchAddExpense: function (setData) {},
});

export function ButtonContextProvider(props) {
  const [isAddExpenseModel, setIsAddExpenseModel] = useState();

  function dispatchAddExpenseHandler(setData) {
    setIsAddExpenseModel(setData);
    console.log(setData, "use context");
  }

  const context = {
    isAddExpenseModel: isAddExpenseModel,
    dispatchAddExpense: dispatchAddExpenseHandler,
  };

  return (
    <ButtonContext.Provider value={context}>
      {props.children}
    </ButtonContext.Provider>
  );
}
export default ButtonContext;
