import { useEffect } from "react";
import LogicArray from "./components/LogicArray"

const logicArray = LogicArray();

const App = () => {
  
  useEffect(() => {
    const dimensiones = prompt('Cuantas dimensiones quieres que tenga el sudoku?')
    console.log(dimensiones)
    
  }, [])
  

  return (
    <>
      hola
    </>
  )
}

export default App
