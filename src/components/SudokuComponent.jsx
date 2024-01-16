import { useEffect, useRef } from "react";

const SudokuComponent = props => {

  const canvasRef = useRef(null);
  let dimensiones = null;
  const sudokuGrid = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
  ];

  useEffect(() => {
    const controller = props.logicArray.controller();
    dimensiones = controller.dialog();
    while (dimensiones === undefined) dimensiones = controller.dialog();

    if (dimensiones) {
      controller.setRow(dimensiones);
      controller.setColumn(dimensiones);
      console.log(props.logicArray.logic);

      //Constantes para definir el tamaño del sudoku completo y de cada celda
      const gridSize = 400;
      const cellSize = gridSize / dimensiones;
  
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
  
      const drawGrid = () => {
        ctx.clearRect(0, 0, gridSize, gridSize); //Limpiamos el canvas
  
        ctx.beginPath();
        for (let i = 1; i < 9; i++) {
          ctx.lineWidth = (i % 3 === 0) ? 2 : 1; // Si la línea es múltiplo de 3, tiene mayor grosor para separar las regiones
  
          ctx.moveTo(i * cellSize, 0);
          ctx.lineTo(i * cellSize, gridSize);
  
          ctx.moveTo(0, i * cellSize);
          ctx.lineTo(gridSize, i * cellSize);
  
        }
        ctx.stroke();
      }
      drawGrid();
    }

  }, []);
  return (
    <>
      {<canvas ref={canvasRef} width={450} height={450} /> }
    </>
  );
}


export default SudokuComponent;