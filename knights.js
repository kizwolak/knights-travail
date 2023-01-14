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
    potentialMoves = potentialMoves.filter(move => move[0] > -1 && move[1] > -1);
    console.log(potentialMoves);
}

createChessBoard(chessBoard);

tour([0,0], [1,1]);
