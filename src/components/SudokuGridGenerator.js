/* const SudokuGridGeneratorComponent = (size) =>{ */
    export default function generateValidNumber (positionX, positionY, matrix){

        let size = matrix[0].length;
        //Array que contiene en principio todos los valores posibles que puede tener el sudoku
        let validNumbers = [];
        for(let i = 1; i<=9; i++){
            validNumbers.push(i);
        }

        //Con este ciclo nos aseguramos que el array de números válidos no contenga ninguno que esté en la misma fila

        for(let j = 0; j<size; j++){
            const actualValue = matrix[positionX][j];
            if(actualValue !== 0 && validNumbers.includes(actualValue)){
                const indexToDelete = validNumbers.indexOf(actualValue);
                validNumbers.splice(indexToDelete, 1); 
            }
        }

        //Con este ciclo aseguramos que ningún elemento del array de números válidos esté en la misma columna
        for(let k = 0; k<size; k++){
            const actualValue = matrix[k][positionY];
            if(actualValue !== 0 && validNumbers.includes(actualValue)){
                const indexToDelete = validNumbers.indexOf(actualValue);
                validNumbers.splice(indexToDelete, 1);
            }
        }
        
        //Encontramos la primera fila y columna del cuadrante en el que nos encontramos según la posición
        let firstQuadrantRow = Math.floor(positionX/3)*3
        let lastQuadrantRow = firstQuadrantRow + 2;

        let firstQuadrantColumn = Math.floor(positionY/3)*3
        let lastQuadrantColumn = firstQuadrantColumn + 2;
        
        //Con este ciclo nos aseguramos que en validNumbers no haya números que estén en el mismo cuadrante
         for(let i = firstQuadrantRow; i<=lastQuadrantRow; i++){
            for(let j = firstQuadrantColumn; j <= lastQuadrantColumn; j++){
                let actualValue = matrix[i][j];
                
                if(actualValue !== 0 && validNumbers.includes(actualValue)){
                    let index = validNumbers.indexOf(actualValue);
                    validNumbers.splice(index, 1);
                }
            }
        } 

        return validNumbers;
    }
