import { useEffect, useState } from "react";
import LogicArray from "./components/LogicArray"
import SudokuComponent from "./components/SudokuComponent";



const App = () => {
  debugger;
  const logicArray = LogicArray();
  console.log(logicArray);

  return (
    <>
      <SudokuComponent logicArray={logicArray} />
    </>
  )
}

export default App
