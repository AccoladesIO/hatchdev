"use strict";
/**
 * Assignment: build a linked list data structure, double linked list, and circular linked list.
 * build a music playlist using a circular linked list. The playlist should have the following features: Shuffle, go to next song, go to previous song, add song, remove song, display current song and loop.
 */
// llinkedlist
// class LNode {
//     value: number;
//     next: LNode | null;
// }
// class LinkedList {
// }
class DoublyLinkedListNode {
    constructor(value) {
        this.next = null;
        this.prev = null;
        this.value = value;
    }
}
class DoublyLinkedList {
    constructor(value) {
        this.head = new DoublyLinkedListNode(value);
        this.tail = this.head;
        this.size = 1;
    }
    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (currentNode !== null && counter < index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    remove(index) {
        const position = this.traverseToIndex(index - 1);
        if (position === null || position.next === null) {
            throw new Error("Index out of bounds");
        }
        position.next = position.next.next;
        if (position.next) {
            position.next.prev = position;
        }
        else {
            this.tail = position; // Update tail if removing the last element
        }
    }
    insert(value, index) {
        const newNode = new DoublyLinkedListNode(value);
        let position = this.traverseToIndex(index - 1);
        if (position === null) {
            throw new Error("Index out of bounds");
        }
        if (newNode.next) {
            newNode.next.prev = newNode;
        }
        else {
            this.tail = newNode; // Update tail if inserting at the end
        }
    }
}
