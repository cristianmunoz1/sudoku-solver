export const LogicArray = () => {

  const logic = {
    row: 0,
    column: 0
  }

  const setRow = row => {
    logic.row = row;
  }

  const setColumn = column => {
    logic.column = column;
  }
  
  const controller = () => {
    return { setRow, setColumn }
  }
    
  return {logic, controller};
}
  
export default LogicArray
  