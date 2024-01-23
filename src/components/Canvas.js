import RandomSudokuGenerator from "./RandomSudokuGenerator";

const Canvas = () => {
    const createCanvas = (canvas, dimensiones, gridSize) => {
        const sudoku = RandomSudokuGenerator(dimensiones * 3);
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

        canvas.font = '20px Arial';
        canvas.textAlign = 'center';
        canvas.textBaseline = 'middle';
        for(let i = 0; i < dimensiones; i++){
            for(let j = 0; j < dimensiones; j++){
                if (sudoku[i][j]) {
                    debugger;
                    canvas.fillText(
                        sudoku[i][j].toString(),
                        j * (subCellSize) + subCellSize / 2,
                        i * (subCellSize) + subCellSize / 2
                    );
                }
            }
        }
    }

    // Función para manejar el clic en el canvas
    const manejarClic = (canvas, ctx, dimensiones, gridSize, event) => {
        var rect = canvas.getBoundingClientRect();
        dimensiones = parseInt(dimensiones);
        const subCellSize = (gridSize / dimensiones) / 3;
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;

        // Calcular la fila y columna clickeada
        var filaClickeada = Math.floor(y / subCellSize);
        var columnaClickeada = Math.floor(x / subCellSize);

        const num = parseInt(prompt(`Selecciona número para fila ${filaClickeada+1} y columna ${columnaClickeada+1}`));
        ctx.font = '20px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(
            num.toString(), columnaClickeada * (subCellSize) + subCellSize / 2,
            filaClickeada * (subCellSize) + subCellSize / 2
        );
    }

    return { createCanvas, manejarClic };
}

  
export default Canvas