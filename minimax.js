/**
 * The algorithma is working but it working in the order of the board.
 * which i litlle problem for us.
 *
 */

function bestMove() {
    // AI to make this turn
    let bestScore = -Infinity;
    let move;
    let available = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        // we want to know if the spot is avalibel
        // This is AI and trying a spot ano not thier spot the next move is not mixmazing player
        if (board[i][j] == "") {
          board[i][j] = ai;
          let score = minimax(board, 0, false);
          board[i][j] = "";
          if (score > bestScore) {
            bestScore = score;
            move = { i, j };
          }
        }
      }
    }
  
    board[move.i][move.j] = ai;
    currentPlayer = human;
  
    /**
     * Now we have to write the minmaxfunction it self.
     * We need another really argument, beacuse it is trun base game and the game is will act
     * differently where it is the maxmising best trun or the minimzing best trun O.
     *
     */
    // So if the x is winning is 1, if the O -1 and tie is zero
    // The code below is showing the senario of our table.
  
    let scores = {
      x: 1,
      O: -1,
      tie: 0,
    };
    function minimax(board, depth, IsMaximizing) {
      // what we want to before this, to see if somebody is wining or not.
      // we make a function that called checkWinner.
      // if the result is not equal with null, the result is assositate with scores result in line 39
      // The score is baset on who will win the game.
      // if i am calling this on specific board configuration at this partical depth and it is
      // end stat just return the score
      // This function is recursive function and it will call it self all time.
      let result = checkWinner();
      if (result !== null) {
        // let score = scores[result];
        // return score;
        return scores[result];
      }
      // here we want to find to best score.
      // what this coding under is doing? is finding the best score for all the possiable next
      // trun by the AI player. or if is not AI player, it is minimazing player we can do the same thing
      // If the mixmazing player check all the spot and find the possiable outcome and retrun it but call the minimax recursive
      if (IsMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            // is the spot are avalibale? her we are trying to check all the possiable move.
            if (board[i][j] == "") {
              board[i][j] = ai;
              let score = minimax(board, depth + 1, false);
              board[i][j] = "";
              bestScore = max(score, bestScore);
              // if (score > bestScore) {
              //   bestScore = score;
              // }
            }
          }
        }
        return bestScore;
      } else {
        // Here we want the minimazing to find the best score for it which is lowest score
        let bestScore = Infinity;
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            // is the spot are avalibale? her we are trying to check all the possiable move.
            if (board[i][j] == "") {
              board[i][j] = human;
              let score = minimax(board, depth + 1, true);
              board[i][j] = "";
              bestScore = min(score, bestScore);
              // if the score last the bestscore
              // if (score < bestScore) {
              //   bestScore = score;
              // }
            }
          }
        }
        return bestScore;
      }
    }
  }
  