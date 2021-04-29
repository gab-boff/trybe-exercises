const replaceX = (inputString, newWord) => {
  let phrase = inputString;

  phrase = phrase.replace('x', newWord);

  return phrase;
}

const replaceFunction = replaceX('Tryber x aqui!', 'Gabriel');

const concatenate = (inputPhrase) => {
  const phrase = `${inputPhrase} Minhas cinco principais habilidades são:
  - HTML;
  - CSS;
  - JavaScript;
  - Git;
  - Inteligência Emocional.`

  return phrase;
}

console.log(concatenate(replaceFunction));