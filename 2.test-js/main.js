const array = [10, 15, 18, 24, 38];

const findBestMatch = (number, arr) => {
  return arr.reduce((prev, curr) => Math.abs(curr - number) < Math.abs(prev - number) ? curr : prev);
}

console.log(findBestMatch(20, array))
