const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'jumps'

const hasWord = `The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`;

console.log(hasWord);