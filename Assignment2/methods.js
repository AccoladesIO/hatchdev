"use strict";
class ArrayAccolades {
    constructor(array) {
        this.array = [];
        this.array = array;
    }
    // 1 includes(): Determines whether an array includes a certain element, returning true or false as appropriate
    includes(k) {
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] === k) {
                console.log(true);
                return true;
            }
        }
        console.log(false);
        return false;
    }
    // 2. indexOf(): Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
    indexOf(value) {
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] === value) {
                console.log(i);
                return i;
            }
        }
        console.log(-1);
        return -1;
    }
    //3.  lastIndexOf(): Returns the index of the last occurrence of a value in an array, or -1 if it is not present.
    lastIndexOf(value) {
        for (let i = this.array.length - 1; i >= 0; i--) {
            if (this.array[i] === value) {
                console.log(i);
                return i;
            }
        }
        ``;
        console.log(-1);
        return -1;
    }
    //4. find(): Returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned. 
    find(predicate) {
        for (let i = 0; i < this.array.length; i++) {
            if (predicate(this.array[i])) {
                console.log(this.array[i]);
                return this.array[i];
            }
        }
        console.log(undefined);
        return undefined;
    }
    // 5.  filter: Returns a new array with all elements that pass the test implemented by the provided function. 
    filter(predicate) {
        let result = [];
        for (let i = 0; i < this.array.length; i++) {
            if (predicate(this.array[i])) {
                result.push(this.array[i]);
            }
        }
        console.log(result);
        return result;
    }
    // 6. push, Appends new elements to the end of an array, and returns the new length of the array.
    push(...elements) {
        for (let element of elements) {
            this.array[this.array.length] = element;
        }
        console.log(this.array);
        return this.array.length;
    }
    // 7.  pop: Removes the last element from an array and returns that element. This method changes the length of the array.
    pop() {
        if (this.array.length === 0) {
            console.log(undefined);
            return undefined;
        }
        const lastElement = this.array[this.array.length - 1];
        this.array.length -= 1; // Remove the last element
        console.log(lastElement);
        return lastElement;
    }
    // 8. shift: Removes the first element from an array and returns that element. This method changes the length of the array.
    shift() {
        if (this.array.length === 0) {
            console.log(undefined);
            return undefined;
        }
        const firstElement = this.array[0];
        for (let i = 0; i < this.array.length - 1; i++) {
            this.array[i - 1] = this.array[i];
        }
        this.array.length -= 1; // Remove the first element
        console.log(firstElement);
        return firstElement;
    }
    // 9. unshift: Adds one or more elements to the beginning of an array and returns the new length of the array.
    unshift(...elements) {
        this.array = [...elements, ...this.array];
        console.log(this.array);
        return this.array.length;
    }
    // 10. concat: Merges two or more arrays and returns a new array.
    concat(array) {
        const newArray = [...this.array, ...array];
        console.log(newArray);
        return newArray;
    }
}
const arr = new ArrayAccolades([1, 2, 3, 4, 5, 6, 7, 8, 9]);
arr.includes(5);
arr.indexOf(3);
arr.lastIndexOf(3);
arr.find((value) => value > 5);
arr.filter((value) => value > 5);
arr.push(10);
arr.pop();
arr.shift();
arr.unshift(0);
arr.unshift(-1, -2, 0);
arr.concat([11, 12, 13]);
const lengthArray = (elements) => {
    let counter = 0;
    for (let element of elements) {
        if (element !== undefined) {
            counter++;
        }
    }
    return counter;
};
console.log(lengthArray([1, 2, 3, "s", 4]));
