const chessBoard = [];
function createChessBoard(array) {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            array.push([i, j]);
        }
    }
}

function createPossibilities(start) {
    let potentialMoves = [[start[0]-1, start[1]-2], [start[0]-2, start[1]-1], [start[0]+1, start[1]+2], [start[0]+2, start[1]+1], [start[0]+2, start[1]-1], [start[0]-1, start[1]+2], [start[0]-2, start[1]+1], [start[0]+1, start[1]-2]];
    potentialMoves = potentialMoves.filter(move => move[0] > -1 && move[1] > -1 && move[0] < 8 && move[1] < 8);
    // potentialMoves = sortTree(potentialMoves);
    return potentialMoves;
}

const findShortest = (arr = []) => {
    const res = arr.reduce((acc, val, ind) => {
       if (!ind || val.length < acc[0].length) {
          return [val];
       };
       if (val.length === acc[0].length) {
          acc.push(val);
       };
       return acc;
    }, []);
    return res;
 };

function tour(start, end, counter = 0) {
    if (counter > 6) return;
    if (start[0] === end[0] && start[1] === end[1]) {
        console.log(true);
        return true;
    }
    let potentialMoves = [];
    potentialMoves = createPossibilities(start);
    // console.log(potentialMoves);
    let shortestPossibilities = [];
    // for (cell of potentialMoves) {
    //     console.log(cell);
    //     possibilities.push(createPossibilities(cell));
    // }
    shortestPossibilities = findShortest(potentialMoves);
    // console.log(shortestPossibilities);
    for (cell of shortestPossibilities) {
        if (tour(cell, end, ++counter) === true) return;
        tour(cell, end, ++counter)
    }
    // console.log(buildTree(potentialMoves, 0, potentialMoves.length - 1));

}

createChessBoard(chessBoard);

tour([0,0], [1,2]);

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