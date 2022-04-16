function sumUntil(maxValue) {

  let numbers = [1, 2, 3, 4, 5];

  let result = numbers.reduce((sum, current) => sum + current, 0);

 for(let i = 0; i <=5; i++) {
    return result
 }

}

console.log(sumUntil(5));