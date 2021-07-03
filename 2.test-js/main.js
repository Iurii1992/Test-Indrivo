const array = [10, 15, 18, 24, 38];

const findBestMatch = (number, arr) => {
  const difference = arr.map(el => Math.abs(el - number))
  const min = Math.min(...difference)

  return arr[difference.indexOf(min)]
}

console.log(findBestMatch(20, array))