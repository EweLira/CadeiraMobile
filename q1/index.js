const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite uma palavra: ', (word) => {
  if (isPalindrome(word)) {
    console.log('É um palíndromo.');
  } else {
    console.log('Não é um palíndromo.');
  }
  rl.close();
});

function isPalindrome(word) {
  const cleanedWord = word.toLowerCase().replace(/[^a-z]/g, '');
  const reversedWord = cleanedWord.split('').reverse().join('');
  return cleanedWord === reversedWord;
}
