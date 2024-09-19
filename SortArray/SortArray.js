/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function mergeSort(arr) {
    // Base case: If the array has 1 or 0 elements, it is already sorted
    if (arr.length <= 1) {
      return arr;
    }
  
    // Divide the array into two halves
    let mid = arr.length >> 1;
    let left = new Array(mid);
    let right = new Array(arr.length - mid);
  
    // Copy elements to left and right arrays
    for (let i = 0; i < mid; i++) {
      left[i] = arr[i];
    }
    for (let i = mid; i < arr.length; i++) {
      right[i - mid] = arr[i];
    }
  
    // Recursively apply the merge sort algorithm to each half
    left = mergeSort(left);
    right = mergeSort(right);
  
    // Merge the two sorted halves
    return merge(left, right);
  }
  
  function merge(arr1, arr2) {
    // Initialize pointers for arr1 and arr2
    let i = 0;
    let j = 0;
  
    // Initialize an empty array to store the merged result
    let result = new Array(arr1.length + arr2.length);
  
    // Iterate through the lists until we reach the end of either arr1 or arr2
    let k = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr2[j] > arr1[i]) {
        result[k++] = arr1[i++];
      } else {
        result[k++] = arr2[j++];
      }
    }
  
    // Copy any remaining elements of arr1
    while (i < arr1.length) {
      result[k++] = arr1[i++];
    }
  
    // Copy any remaining elements of arr2
    while (j < arr2.length) {
      result[k++] = arr2[j++];
    }
  
    // Return the merged and sorted result array
    return result;
  }







// function merge(arr1, arr2) {
//     // Initialize pointers for arr1 and arr2
//     let i = 0;
//     let j = 0;

//     // Initialize an empty array to store the merged result
//     let result = [];

//     // Iterate through the lists until we reach the end of either arr1 or arr2
//     while(i < arr1.length && j < arr2.length) {
//         // Compare the elements at indices i and j of arr1 and arr2
//         if (arr2[j] > arr1[i]) {
//             // If arr2[j] is greater, push arr1[i] to the result array
//             result.push(arr1[i]);
//             // Increment the pointer for arr1
//             i++;
//         } else {
//         // Otherwise, push arr2[j] to the result array
//         result.push(arr2[j]);
//         // Increment the pointer for arr2
//         j++;
//         }
//     }
//     // copy any remaining elements of arr 2
//     while(j < arr2.length) {
//         // Push the remaining elements of arr2 to the result array
//         result.push(arr2[j]);
//         // Increment the pointer for arr2
//         j++;
//     }
//     // copy any remainig elements of arr 1
//     while(i < arr1.length) {
//         // Push the remaining elements of arr1 to the result array
//         result.push(arr1[i]);
//         // Increment the pointer for arr1
//         i++;
//     }
//     // Return the merged and sorted result array
//     return result;
// }