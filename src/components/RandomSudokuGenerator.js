import generateMatrix from "./MatrixGenerator";
import GetValidNumbers from "./GetValidNumbers";

export default function RandomSudokuGenerator(size) {
  let sudoku = generateMatrix(size);

  //Debemos hacer que sea aleatoriamente con un 70% de probabilidad de que rellene la casilla con un número válido.
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let randomProbabilityNumber = Math.random();
      if (randomProbabilityNumber > 0.7) {
        let validNumbers = GetValidNumbers(i, j, sudoku);
        sudoku[i][j] = validNumbers.length ? validNumbers[Math.floor(Math.random() * validNumbers.length)] : 0;
      }
    }
  }
  return sudoku;
}
