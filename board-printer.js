/* 
    Given a tic-tac-toe board represented by an array of arrays - output the board to the terminal.
    For example, if we have the following board:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
    We should output something like this (feel free to be creative):
          X  |     |     
        =================
             |  X  |     
        =================
          O  |  O  |  X  
        =================
    Test your function by calling it with an example tic-tac-toe board.
*/
export function printBoard(board) {
  return board
    .map(
      (row) => row.map((ele) => ` ${ele} `).join(" ")
      //
    )
    .join("\n==========\n");
}

/*
    Given a tic-tac-toe board (an array of arrays),
        - return true if there are no moves left to make (there are no more '_' values)
        - return false if there are still moves that can be made
*/
export function checkIfNoMovesLeft(board) {
  if (Array.isArray(board)) {
    let makeItFlat = board.flat();
    const canMove = makeItFlat.includes("_");
    return canMove;
  } else {
    return "Make sure Array Board is Array";
  }
}
