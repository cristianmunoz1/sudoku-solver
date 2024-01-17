/* const SudokuGridGeneratorComponent = (size) =>{ */
    export default function generateValidNumber (positionX, positionY, matrix){

        let size = matrix[0].length;
        //Array que contiene en principio todos los valores posibles que puede tener el sudoku
        let validNumbers = [];
        for(let i = 1; i<=size; i++){
            validNumbers.push(i);
        }

        //Con este ciclo nos aseguramos que el array de números válidos no contenga ninguno que esté en la misma fila

        for(let j = 0; j<size; j++){
            const actualValue = matrix[positionX][j];
            if(actualValue !== 0){
                const indexToDelete = validNumbers.indexOf(actualValue);
                validNumbers.splice(indexToDelete, 1);
            }
        }

        //Con este ciclo aseguramos que ningún elemento del array de números válidos esté en la misma columna
        for(let k = 0; k<size; k++){
            const actualValue = matrix[k][positionY];
            if(actualValue !== 0){
                const indexToDelete = validNumbers.indexOf(actualValue);
                validNumbers.splice(indexToDelete, 1);
            }
        }
        

        return validNumbers;
    }
