"use strict";
class QueueNode {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }
    enqueue(item) {
        const newNode = new QueueNode(item);
        if (this.first === null) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            if (this.last) {
                this.last.next = newNode;
                this.last = newNode;
            }
        }
    }
    dequeue() {
        // if there is no first node, return undefined
        if (this.first === null)
            return undefined;
        // get the value of the first node
        const dequeuedValue = this.first.value;
        // remove the first node by moving the first pointer to the next node
        this.first = this.first.next;
        // 
        if (this.first === null) {
            this.last = null;
        }
        return dequeuedValue;
    }
}
const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
console.log(myQueue);
console.log(myQueue.dequeue()); // 1
console.log(myQueue.dequeue()); // 2
