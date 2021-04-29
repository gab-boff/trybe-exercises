const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const orderNumbers = (array) => {
  const numbers = array;

  numbers.sort( (a, b) => {
    return a - b;
  })
  return numbers;
}

console.log(orderNumbers(oddsAndEvens));
