const chessBoard = [];
function createChessBoard(array) {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            array.push([i, j]);
        }
    }
}

function tour([a, b], [c, d]) {
    if (a === c && b === d) return true;
    let potentialMoves = [[a-1, b-2], [a-2, b-1], [a+1, b+2], [a+2, b+1], [a+2, b-1], [a-1, b+2], [a-2, b+1], [a+1, b-2]];
    potentialMoves = potentialMoves.filter(move => move[0] > -1 && move[1] > -1 && move[0] < 8 && move[1] < 8);
    potentialMoves = sortTree(potentialMoves);
    console.log(potentialMoves);
    // for (cell of potentialMoves) {

    // }
    console.log(buildTree(potentialMoves, 0, potentialMoves.length - 1));
}

createChessBoard(chessBoard);

tour([5,5], [1,1]);

function nodeCreate (d) {
    return {
        data: d,
        left: null,
        right: null,
    }
}

function sortTree(array) {
    for (element of array) {
        let elementIndexes = [];
        for (let i = 0; i < array.length; i++) {
            if (array[i] === element) (elementIndexes.push(i));
        }
        if (elementIndexes.length > 1) {
            elementIndexes.shift();
            for (index of elementIndexes) {
                array.splice(index, 1);
            }
        }
    }
    array.sort(function(a, b) {return a - b});
    return array;
}

function buildTree (array, start, end) {
    if (start > end) return null;
    let mid = Math.floor((start + end) / 2);
    let node = nodeCreate(array[mid]);
    node.left = buildTree(array, start, mid - 1);
    node.right = buildTree(array, mid + 1, end);
    return node;
}