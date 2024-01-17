const Canvas = () => {
    const createCanvas = (canvas, dimensiones, gridSize) => {
        dimensiones = parseInt(dimensiones);
        //Constantes para definir el tamaño del sudoku completo y de cada celda
        const subCellSize = (gridSize / dimensiones) / 3;
        dimensiones *= 3;

        canvas.clearRect(0, 0, gridSize, gridSize); //Limpiamos el canvas
        for (let i = 1; i < (dimensiones+1); i++) {
            canvas.beginPath();
            canvas.lineWidth = 1;
            canvas.strokeStyle = (i%3 === 0 && i !== dimensiones) ? "red" : 'black';
            
            canvas.moveTo(i * subCellSize, 0);
            canvas.lineTo(i * subCellSize, gridSize);

            canvas.moveTo(0, i * subCellSize);
            canvas.lineTo(gridSize, i * subCellSize);
            canvas.stroke();
        }
    }

    return { createCanvas };
}

  
export default Canvas