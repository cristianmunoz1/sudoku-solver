export const LogicArray = () => {

  const logic = {
    row: 0,
    column: 0
  }

  const dialog = () => {
    const dimensiones = prompt('Cuantas dimensiones quieres que tenga el sudoku?');
    if (!dimensiones) {
      alert('Agrega un valor');
      return;
    }
    if (dimensiones < 0 ) {
      alert('Agrega un número positivo');
      return;
    }

    if (dimensiones > 12) {
      alert('Agrega un número menor a 13');
      return;
    }

    debugger;
    if (!parseInt(dimensiones)) {
      alert('Agrega un número');
      return;
    }

    return dimensiones;
  }

  const setRow = row => {
    logic.row = row;
  }

  const setColumn = column => {
    logic.column = column;
  }
  
  const controller = () => {
    return { dialog, setRow, setColumn }
  }
    
  return {logic, controller};
}
  
export default LogicArray
  