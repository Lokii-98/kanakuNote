import { createContext, useState } from "react";

const ButtonContext = createContext({
  btnEventData: null,
  dispatchButtonEventData: function () {},
});

export function ButtonContextProvider(props) {
  const [btnEventData, setIsBtnEventData] = useState();

  function dispatchButtonEventDataHandler(editData) {
    setIsBtnEventData(editData);
    console.log(editData, "use context");
  }

  const context = {
    btnEventData: btnEventData,
    dispatchButtonEventData: dispatchButtonEventDataHandler,
  };

  return (
    <ButtonContext.Provider value={context}>
      {props.children}
    </ButtonContext.Provider>
  );
}
export default ButtonContext;
