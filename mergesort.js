function recursiveSorting(arr) {
  if (arr.length == 0) {
    return [];
  }
  if (arr.length == 1) {
    return arr;
  } else {
    let arr1 = arr.slice(0, arr.length / 2);
    let arr2 = arr.slice(arr.length / 2, arr.length);
    return merge(recursiveSorting(arr1), recursiveSorting(arr2));
  }
}

function merge(arr1, arr2) {
  let arrMerged = [];
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      arrMerged.push(arr1.shift());
    } else {
      arrMerged.push(arr2.shift());
    }
  }

  while (arr1.length > 0) {
    arrMerged.push(arr1.shift());
  }

  while (arr2.length > 0) {
    arrMerged.push(arr2.shift());
  }

  return arrMerged;
}

// console.log(merge([1, 3, 15], [9, 12, 13]));

console.log(recursiveSorting([34, 7, 23, 32, 5, 62])); // Should return sorted array [5, 7, 23, 32, 34, 62]
console.log(recursiveSorting([10, -1, 0, 5, -10, 20])); // Should handle negative numbers correctly
console.log(recursiveSorting([])); // Should handle empty arrays gracefully
console.log(recursiveSorting([1])); // Should return the single element array
console.log(recursiveSorting([2, 1, 3, 1])); // Should handle duplicates correctly
