import { useEffect, useRef } from "react";
import CanvasComponent from "./Canvas";

import '../styles/canvas.css';

const SudokuComponent = props => {

  const canvasRef = useRef(null);
  let dimensiones = null;
  const gridSize = 550;
  const canvas = document.getElementById('miCanvas');

  useEffect(() => {
    const controller = props.logicArray.controller();
    dimensiones = controller.dialog();
    while (dimensiones === undefined) dimensiones = controller.dialog();

    if (dimensiones) {
      controller.setRow(dimensiones);
      controller.setColumn(dimensiones);
  
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const canvasCompontent = CanvasComponent();
      canvasCompontent.createCanvas(ctx, dimensiones, gridSize);

      // Asignar el manejador de evento clic al canvas
      canvas.addEventListener('click', event => canvasCompontent.manejarClic(canvas, ctx, dimensiones, gridSize, event));
    }
    
  }, []);

  return (
    <div className="contenedor">
      <canvas ref={canvasRef} width={gridSize} height={gridSize} id="miCanvas" />
    </div>
  );
}


export default SudokuComponent;