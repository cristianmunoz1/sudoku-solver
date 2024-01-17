import { useEffect, useRef } from "react";
import CanvasComponent from "./Canvas";
import generateMatrix from "./MatrixGenerator";

import '../styles/canvas.css';

const SudokuComponent = props => {

  const canvasRef = useRef(null);
  let dimensiones = null;
  const gridSize = 550;
  

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
    const sudokuGrid = generateMatrix(dimensiones * 3);
    console.log(sudokuGrid)
    
  }, []);

  

  return (
    <div className="contenedor">
      <canvas ref={canvasRef} width={gridSize} height={gridSize} />
    </div>
  );
}


export default SudokuComponent;