import LogicArray from "./components/LogicArray"
import SudokuComponent from "./components/SudokuComponent";

const logicArray = LogicArray();

const App = () => {
  console.log(logicArray);
  return (
    <>
      <SudokuComponent/>
    </>
  )
}

export default App
