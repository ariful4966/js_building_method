const para =
  "The quick brown fox jumpsmover the lazy dog. If the dog braked, was it really lazy?";

const srcWord = "lazy";

const indexofFirst = para.indexOf(srcWord);
console.log(indexofFirst);
const indexof2nd = para.indexOf(srcWord, indexofFirst + 1);
console.log(indexof2nd);
