'use strict';

function binarySearch(a, z) {

  let left = 0;
  let right = a.length - 1;

  while(left <= right) {
    let mid = Math.floor((right + left)/2);

    if (a[mid] === z) {
      return mid;
    } else if (a[mid] < z) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    console.log("left", left);
    console.log("right", right);
  }
}

console.log("answer", binarySearch([ 0, 1, 2, 3, 4, 5, 6, 7, 8], 5));