const obj = {
  property1: 42,
};

Object.seal(obj);
obj.property1 = 33;
console.log(obj.property1);

delete obj.property1;
console.log(obj.property1);