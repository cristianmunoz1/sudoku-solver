import generateValidNumber from "../components/SudokuGridGenerator";
import { expect, test } from 'vitest';

const sudokuGrid = [
  [5, 3, 0, 0, 0, 0],
  [6, 0, 0, 1, 0, 0],
  [0, 4, 2, 0, 0, 6],
  [2, 0, 0, 3, 0, 0],
  [0, 0, 5, 0, 1, 0],
  [0, 0, 0, 0, 0, 4]
];

test("Generate valid numbers for a subcell in a random sudoku.", () =>{
    expect(generateValidNumber(3, 5, sudokuGrid)).toEqual([1, 5]);
})