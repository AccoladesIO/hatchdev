class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }

    clear(): void {
        this.items = [];
    }
}

class StackNode<T> {
    value: T;
    next: StackNode<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

class LStack<T> {
    private top: StackNode<T> | null = null;
    private count: number = 0;

    push(item: T): void {
        const newNode = new StackNode(item);
        newNode.next = this.top;
        this.top = newNode;
        this.count++;
    }

    pop(): T | undefined {
        if (this.isEmpty()) return undefined;
        const poppedValue = this.top!.value;
        this.top = this.top!.next;
        this.count--;
        return poppedValue;
    }

    peek(): T | undefined {
        return this.top ? this.top.value : undefined;
    }

    isEmpty(): boolean {
        return this.count === 0;
    }

    size(): number {
        return this.count;
    }

    clear(): void {
        this.top = null;
        this.count = 0;
    }
}