export const LogicArray = () => {

  const logic = {
    row: 0,
    column: 0
  }

  const dialog = () => {
    debugger;
    const dimensiones = prompt('Cuantas dimensiones quieres que tenga el sudoku?');
    if (dimensiones === '') {
      alert('Agrega un valor');
      return;
    }
    if (dimensiones && dimensiones <= 0 ) {
      alert('Agrega un número mayor que 0');
      return;
    }

    if (dimensiones > 12) {
      alert('Agrega un número menor a 13');
      return;
    }

    if (dimensiones && !parseInt(dimensiones)) {
      alert('Agrega un número');
      return;
    }

    if (dimensiones === null) {
      return false;
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
  