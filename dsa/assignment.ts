// O(1) Algorithms
// 1. Accessing an element in an array by index
function getElementAtIndex(arr: number[], index: number): number {
    return arr[index];
}

// 2. Checking if a number is even or odd
function isEven(num: number): boolean {
    return num % 2 === 0;
}

// O(n) Algorithms
// 1. Finding the sum of all elements in an array
function sumArray(arr: number[]): number {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

// 2. Finding the maximum element in an array
function findMax(arr: number[]): number {
    let max = arr[0];
    for (let num of arr) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

// O(log n) Algorithms
// 1. Binary search in a sorted array
function binarySearch(arr: number[], target: number): boolean {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return true;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
}

// 2. Finding the largest power of 2 less than or equal to a number
function largestPowerOfTwo(n: number): number {
    let result = 1;
    while (result * 2 <= n) {
        result *= 2;
    }
    return result;
}