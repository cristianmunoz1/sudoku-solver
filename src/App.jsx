import LogicArray from "./components/LogicArray"
import SudokuComponent from "./components/SudokuComponent";

const App = () => {
  const logicArray = LogicArray();
  
  return (
    <>
      <SudokuComponent logicArray={logicArray} />
    </>
  )
}

export default App
