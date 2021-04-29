const phraseInput = (phrase) => {
  const convertPhraseArray = phrase.split(' ');

  const highWord = convertPhraseArray.sort((a, b) => {
    return b.length - a.length;
  })

  return highWord[0];
}

// 'Antônio foi no banheiro e não sabemos o que aconteceu';


console.log(phraseInput('Antônio foi no banheiro e não sabemos o que aconteceu'));