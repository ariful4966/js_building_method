function getCircleY(radians, radius) {
  return Math.sin(radians) * radius;
}

console.log(getCircleY(1, 1));
console.log(getCircleY(2, 10));
console.log(getCircleY(Math.PI, 1));
