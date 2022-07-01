function generateBoard(whiteQueen, blackQueen){
  const board = [];
  for(let i = 0; i < 8; i++){
    const temp = [];
    for(let j = 0; j < 8; j++){
      if(arrayEquals([i, j], whiteQueen) || arrayEquals([i, j], blackQueen)){
        temp.push(1);
      }else{
        temp.push(0);
      };
    };
    board.push(temp);
  };
  return board;
};

function arrayEquals(a, b) {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
};

function queenThreat(generatedBoard){
  let whiteQueen;
  let blackQueen;
  for(let i = 0; i < generatedBoard.length; i++){
        const j = generatedBoard[i].indexOf(1);
    if(j != -1){
      whiteQueen = [i, j];
      generatedBoard[i][j] = 0;
      break;
    }
  };
  for(let k = 0; k < generatedBoard.length; k++){
    const l = generatedBoard[k].indexOf(1);
    if(l != -1){
      blackQueen = [k, l];
    }
  };
  if(blackQueen[0] == whiteQueen[0] || blackQueen[1] == whiteQueen[1] || (blackQueen[0] == whiteQueen[1] && blackQueen[1] == whiteQueen[0])){
    return true;
  }else{
    return false;
  }
};