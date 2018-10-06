module.exports = function getZerosCount(number, base) {
  let baseNumber = base;
  let power = 1;
  let result = 0;
  const delitel = getMaxSimpleNumber(baseNumber);
  
  while(true) {
      if(baseNumber % delitel !== 0) {
          break;
      }

      baseNumber = baseNumber / delitel;
      power++;
  }

    for (let i = delitel; number/i >= 1; i *= delitel){
        result += Math.floor(number/i);
    };

    return Math.floor(result / --power);
}

function getMaxSimpleNumber(number) {
    const simpleNumbers = [];
    let targetNum = number;
    let delitel = 2;
    
    while(true) {
        if (targetNum % delitel === 0) {
            simpleNumbers.push(delitel);
            targetNum = targetNum / delitel;
        } else if(targetNum > delitel) {
            delitel++;
        } else {
            break;
        }
    }

    return Math.max(...simpleNumbers);
}
