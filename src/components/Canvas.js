import RandomSudokuGenerator from "./RandomSudokuGenerator";

const Canvas = () => {
    const createCanvas = (canvas, dimensiones, gridSize) => {
        const sudoku = RandomSudokuGenerator(dimensiones * 3);
        console.log(sudoku)
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
        for(let i = 0; i < 9; i++){
            for(let j = 0; j < 9; j++){
                if(sudoku[i][j] !== 0){
                    canvas.fillText(
                        sudoku[i][j].toString(),
                        j * (subCellSize) + subCellSize / 2,
                        i * (subCellSize) + subCellSize / 2
                    );
                }
            }
        }
    }

    return { createCanvas };
}

  
export default Canvas