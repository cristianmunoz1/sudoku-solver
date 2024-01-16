import { useEffect } from "react";
import LogicArray from "./components/LogicArray"
import SudokuComponent from "./components/SudokuComponent";

const logicArray = LogicArray();

const App = () => {
  
  useEffect(() => {
    const dimensiones = prompt('Cuantas dimensiones quieres que tenga el sudoku?')
    console.log(dimensiones)
    
  }, [])
  

  return (
    <>
      <SudokuComponent/>
    </>
  )
}

export default App
