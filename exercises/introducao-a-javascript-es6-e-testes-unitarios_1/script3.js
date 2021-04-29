const fatorial = (number) => {
  let multiplicador = 1;
  for (let i = number; i > 0; i -= 1) {
    multiplicador = multiplicador * i;
  }
  return multiplicador;
};

console.log(fatorial(4));