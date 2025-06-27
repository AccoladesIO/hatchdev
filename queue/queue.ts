class QueueNode<T> {
    value: T;
    next: QueueNode<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

class Queue<T> {
    private first: QueueNode<T> | null = null;
    private last: QueueNode<T> | null = null;

    enqueue(item: T): void {
        const newNode = new QueueNode(item)
        if (this.first === null) {
            this.first = newNode;
            this.last = newNode;
        } else {
            if (this.last) {
                this.last.next! = newNode
                this.last = newNode;
            }
        }
    }
    dequeue(): T | undefined {
        // if there is no first node, return undefined
        if (this.first === null) return undefined;

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

const myQueue = new Queue<number>();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
console.log(myQueue);
console.log(myQueue.dequeue()); // 1
console.log(myQueue.dequeue()); // 2