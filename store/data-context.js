import { createContext, useState } from "react";

const DataContext = createContext({
  kanakuNoteData: null,
  setKanakuNoteData: function (setData) {},
  removeKanakuNoteData: function () {},
});

export function DataContextProvider(props) {
  const [kanakuNoteData, setKanakuNoteData] = useState();

  function dispacthKanakuNoteDataHanlder(setData) {
    setKanakuNoteData(setData);
  }

  const context = {
    kanakuNoteData: kanakuNoteData,
    dispacthKanakuNoteData: dispacthKanakuNoteDataHanlder,
  };
  return (
    <DataContext.Provider value={context}>
      {props.children}
    </DataContext.Provider>
  );
}
export default DataContext;
