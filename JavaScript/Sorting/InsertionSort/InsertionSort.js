/**
 * @param {number[]} nums
 * @return {number[]}
 */

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    temp = arr[i];
    pos = i - 1;
    while (pos >= 0) {
      if (arr[pos] > temp) {
        arr[pos + 1] = arr[pos];
        pos--;
      } else {
        break;
      }
    }

    arr[pos + 1] = temp;
  }
  return arr;
};

console.log(insertionSort([5, 4, 3, 2, 1]));
// [1, 2, 3, 4, 5]
console.log(insertionSort([8, 1, 14, 7]));
// [1, 7, 8, 14]
console.log(insertionSort([1, 2, 3]));
// [1, 2, 3]
