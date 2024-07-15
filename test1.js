function sumOfTwoInArray(arr, target) {
  const numSet = new Set();
  for (const num of arr) {
    const complement = target - num;
    if (numSet.has(complement)) {
      return true;
    }
    numSet.add(num);
  }
  return false;
}

console.log(numSet);
