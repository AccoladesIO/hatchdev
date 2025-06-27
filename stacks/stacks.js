"use strict";
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    clear() {
        this.items = [];
    }
}
class StackNode {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}
class LStack {
    constructor() {
        this.top = null;
        this.count = 0;
    }
    push(item) {
        const newNode = new StackNode(item);
        newNode.next = this.top;
        this.top = newNode;
        this.count++;
    }
    pop() {
        if (this.isEmpty())
            return undefined;
        const poppedValue = this.top.value;
        this.top = this.top.next;
        this.count--;
        return poppedValue;
    }
    peek() {
        return this.top ? this.top.value : undefined;
    }
    isEmpty() {
        return this.count === 0;
    }
    size() {
        return this.count;
    }
    clear() {
        this.top = null;
        this.count = 0;
    }
}
