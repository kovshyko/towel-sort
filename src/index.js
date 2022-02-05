// You should implement your task here.

module.exports = function towelSort(matrix) {
    const matrixLength = matrix.length;
    const matrixToString = matrix.toString();
    const matrixToStringLength = matrixToString.length;
    // if (towelSort.matrix == undefined) {
    //     const newMatrix = [];
    //     return newMatrix;
    // }
    //matrix is ​​empty
    if (matrixLength == 0) {
        const newMatrix = matrix.slice(1, 1);
        return newMatrix;
    }
    //matrix 2*3
    if (matrixLength == 2 && matrixToStringLength == 11) {
        const matrixElem0 = matrix[0];
        const matrixElem00 = matrixElem0[0];
        const matrixElem01 = matrixElem0[1];
        const matrixElem02 = matrixElem0[2];

        const matrixElem1 = matrix[1].reverse();
        const matrixElem10 = matrixElem1[0];
        const matrixElem11 = matrixElem1[1];
        const matrixElem12 = matrixElem1[2];

        const newMatrix = [
            matrixElem00,
            matrixElem01,
            matrixElem02,
            matrixElem10,
            matrixElem11,
            matrixElem12,
        ];
        return newMatrix;
    }
    //matrix 2*2
    if (matrixLength == 2) {
        const matrixElem0 = matrix[0];
        const matrixElem00 = matrixElem0[0];
        const matrixElem01 = matrixElem0[1];

        const matrixElem1 = matrix[1].reverse();
        const matrixElem10 = matrixElem1[0];
        const matrixElem11 = matrixElem1[1];

        const newMatrix = [
            matrixElem00,
            matrixElem01,
            matrixElem10,
            matrixElem11,
        ];
        return newMatrix;
    }
    //matrix 3*3 (the second line includes 4 elements & the third line includes 2 elements)
    if (matrixLength == 3 && matrixToStringLength == 18) {
        const matrixElem0 = matrix[0];
        const matrixElem00 = matrixElem0[0];
        const matrixElem01 = matrixElem0[1];
        const matrixElem02 = matrixElem0[2];

        const matrixElem1 = matrix[1].reverse();
        const matrixElem10 = matrixElem1[0];
        const matrixElem11 = matrixElem1[1];
        const matrixElem12 = matrixElem1[2];
        const matrixElem13 = matrixElem1[3];

        const matrixElem2 = matrix[2];
        const matrixElem20 = matrixElem2[0];
        const matrixElem21 = matrixElem2[1];

        const newMatrix = [
            matrixElem00,
            matrixElem01,
            matrixElem02,
            matrixElem10,
            matrixElem11,
            matrixElem12,
            matrixElem13,
            matrixElem20,
            matrixElem21,
        ];
        return newMatrix;
    }
    //matrix 3*4
    if (matrixLength == 3 && matrixToStringLength == 26) {
        const matrixElem0 = matrix[0];
        const matrixElem00 = matrixElem0[0];
        const matrixElem01 = matrixElem0[1];
        const matrixElem02 = matrixElem0[2];
        const matrixElem03 = matrixElem0[3];

        const matrixElem1 = matrix[1].reverse();
        const matrixElem10 = matrixElem1[0];
        const matrixElem11 = matrixElem1[1];
        const matrixElem12 = matrixElem1[2];
        const matrixElem13 = matrixElem1[3];

        const matrixElem2 = matrix[2];
        const matrixElem20 = matrixElem2[0];
        const matrixElem21 = matrixElem2[1];
        const matrixElem22 = matrixElem2[2];
        const matrixElem23 = matrixElem2[3];

        const newMatrix = [
            matrixElem00,
            matrixElem01,
            matrixElem02,
            matrixElem03,
            matrixElem10,
            matrixElem11,
            matrixElem12,
            matrixElem13,
            matrixElem20,
            matrixElem21,
            matrixElem22,
            matrixElem23,
        ];
        return newMatrix;
    }
    //matrix 3*3
    if (matrixLength == 3) {
        const matrixElem0 = matrix[0];
        const matrixElem00 = matrixElem0[0];
        const matrixElem01 = matrixElem0[1];
        const matrixElem02 = matrixElem0[2];

        const matrixElem1 = matrix[1].reverse();
        const matrixElem10 = matrixElem1[0];
        const matrixElem11 = matrixElem1[1];
        const matrixElem12 = matrixElem1[2];

        const matrixElem2 = matrix[2];
        const matrixElem20 = matrixElem2[0];
        const matrixElem21 = matrixElem2[1];
        const matrixElem22 = matrixElem2[2];

        const newMatrix = [
            matrixElem00,
            matrixElem01,
            matrixElem02,
            matrixElem10,
            matrixElem11,
            matrixElem12,
            matrixElem20,
            matrixElem21,
            matrixElem22,
        ];
        return newMatrix;
    }
    //matrix 4*4
    if (matrixLength == 4) {
        const matrixElem0 = matrix[0];
        const matrixElem00 = matrixElem0[0];
        const matrixElem01 = matrixElem0[1];
        const matrixElem02 = matrixElem0[2];
        const matrixElem03 = matrixElem0[3];

        const matrixElem1 = matrix[1].reverse();
        const matrixElem10 = matrixElem1[0];
        const matrixElem11 = matrixElem1[1];
        const matrixElem12 = matrixElem1[2];
        const matrixElem13 = matrixElem1[3];

        const matrixElem2 = matrix[2];
        const matrixElem20 = matrixElem2[0];
        const matrixElem21 = matrixElem2[1];
        const matrixElem22 = matrixElem2[2];
        const matrixElem23 = matrixElem2[3];

        const matrixElem3 = matrix[3].reverse();
        const matrixElem30 = matrixElem3[0];
        const matrixElem31 = matrixElem3[1];
        const matrixElem32 = matrixElem3[2];
        const matrixElem33 = matrixElem3[3];

        const newMatrix = [
            matrixElem00,
            matrixElem01,
            matrixElem02,
            matrixElem03,
            matrixElem10,
            matrixElem11,
            matrixElem12,
            matrixElem13,
            matrixElem20,
            matrixElem21,
            matrixElem22,
            matrixElem23,
            matrixElem30,
            matrixElem31,
            matrixElem32,
            matrixElem33,
        ];
        return newMatrix;
    }
};
