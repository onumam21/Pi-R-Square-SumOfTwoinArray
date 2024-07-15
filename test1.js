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

console.log(sumOfTwoInArray([1, 3, 5, 7, 16, 4], 8));
console.log(sumOfTwoInArray([1, 3, 5, 7, 16, 4], 12));
console.log(sumOfTwoInArray([1, 3, 5, 7, 16, 4], 18));
console.log(sumOfTwoInArray([12, 17, 14, 11, 19, 8], 20));
