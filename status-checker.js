import { checkIfNoMovesLeft } from './board-printer.js';

/*
    Example board:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
*/

 let board = [
    ['X', '_', 'X'],
    ['X', 'X', '_'],
    ['X', 'O', 'X']
];

/*
    Given 3 parameters:
        - a tic-tac-toe board (array of arrays)
        - a player ('X' or 'O')
        - a row index number (0, 1 or 2)
    Return true if the player has made a move in all 3 squares in the row
    Otherwise, return false
*/
function checkRow(board, players, rowNumber) {
    return players.some(player =>
        board[rowNumber][0] === player &&
        board[rowNumber][1] === player &&
        board[rowNumber][2] === player
    );
}

//  function call with an array of players
checkRow(board, ['X', 'O'], 0);

/*
    Given 3 parameters:
        - a tic-tac-toe board (array of arrays)
        - a player ('X' or 'O')
        - a column index number (0, 1 or 2)
    Return true if the player has made a move in all 3 squares in the column
    Otherwise, return false
*/
function checkColumn(board, players, columnNumber) {
    return players.some(player =>
        board[0][columnNumber] === player &&
        board[1][columnNumber] === player &&
        board[2][columnNumber] === player
    );
}

//  function call with an array of players
checkColumn(board, ['X', 'O'], 0);

/*
    Given 2 parameters:
        - a tic-tac-toe board (array of arrays)
        - a player ('X' or 'O')
    Return true if the player has made a move in 3 diagonal squares
    Otherwise, return false
*/
function checkDiagonal(board, players) {
    return players.some(player =>
        (board[0][0] === player && board[1][1] === player && board[2][2] === player) ||
        (board[0][2] === player && board[1][1] === player && board[2][0] === player)
    );
}

// Corrected function call with an array of players
checkDiagonal(board, ['X', 'O']);

/*
    There is no need to change any code below this line.
*/

function checkIfPlayerWon(board, player) {
    for(let i = 0; i <= 2; i++) {
        if(checkRow(board, player, i) || checkColumn(board, player, i)) {
            return true;
        }
    }

    if(checkDiagonal(board, player)) {
        return true;
    }

    return false;
}

export function isGameOver(board) {
    if(checkIfPlayerWon(board, 'X')) {
        console.log('X has won the game!\n');
        return true;
    }

    if(checkIfPlayerWon(board, 'O')) {
        console.log('O has won the game!\n');
        return true;
    }

    if(checkIfNoMovesLeft(board)) {
        console.log('Game Over - It\s a tie!\n');
        return true;
    }

    return false;
}
