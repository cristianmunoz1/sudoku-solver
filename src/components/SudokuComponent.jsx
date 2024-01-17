import { useEffect, useRef } from "react";

import CanvasComponent from "./Canvas";

import '../styles/canvas.css';

const SudokuComponent = props => {

  const canvasRef = useRef(null);
  let dimensiones = null;
  const gridSize = 550;
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
  
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const canvasCompontent = CanvasComponent();
      canvasCompontent.createCanvas(ctx, dimensiones, gridSize);
    }

  }, []);
  return (
    <div className="contenedor">
      <canvas ref={canvasRef} width={gridSize} height={gridSize} />
    </div>
  );
}


export default SudokuComponent;