function getCircleX(radians, radius) {
  return Math.cos(radians) * radius;
}

console.log(getCircleX(1, 1));
console.log(getCircleX(1, 2));
console.log(getCircleX(2, 10));
console.log(getCircleX(Math.PI, 10));
