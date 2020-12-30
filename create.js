const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My Name is ${this.name}. Am I human ${this.isHuman}`);
  },
};

const me = Object.create(person);

me.name = " Matherw";

me.isHuman = true;

me.printIntroduction();
console.log(me);

