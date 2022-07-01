function calculateChange(total, cash){
  let neededChange = cash - total;
  let result = {};
  if(neededChange >= 2000){
    result.twentyDollar = Math.floor(neededChange / 2000);
    neededChange -= (result.tenDollar * 2000);
  }
  if(neededChange >= 1000){
    result.tenDollar = 1;
    neededChange -= 1000;
  }
  if(neededChange >= 500){
    result.fiveDollar = 1;
    neededChange -= 500;
  }
  if(neededChange >= 200){
    result.twoDollar = Math.floor(neededChange / 200);
    neededChange -= (result.twoDollar * 200);
  }
  if(neededChange >= 100){
    result.oneDollar = 1;
    neededChange -= 100;
  }
  if(neededChange >= 25){
    result.quarter = Math.floor(neededChange / 25);
    neededChange -= (result.quarter * 25);
  }
  if(neededChange >= 10){
    result.dime = Math.floor(neededChange / 10);
    neededChange -= (result.dime * 10);
  }
  if(neededChange >= 5){
    result.nickel = 1;
    neededChange -= 5;
  }
  result.penny = neededChange;
  return result;
};