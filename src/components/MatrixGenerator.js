export default function generateMatrix(size) {
    let matrix = [];
    for(let i = 0; i < size; i++){
        matrix.push([]);
        for(let j = 0; j<size; j++){
            matrix[i].push(0);
        }
    }

    return matrix;
}
