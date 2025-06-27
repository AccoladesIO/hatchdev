class PlaylistLinkedListNode<T> {
    value: T;
    next: PlaylistLinkedListNode<T> | null;
    prev: PlaylistLinkedListNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class PlaylistLinkedList<T> {
    private head: PlaylistLinkedListNode<T> | null = null;
    private tail: PlaylistLinkedListNode<T> | null = null;
    private size: number = 0;

    addSong(song: T): void {
        const newSong = new PlaylistLinkedListNode(song);
        if (!this.head) {
            this.head = newSong;
            this.tail = newSong;
            this.size = 1;
        } else {
            this.tail!.next = newSong;
            newSong.prev = this.tail;
            this.tail = newSong;
            this.size++;
        }
    }
    getSongIdx(song: T): number {
        let current = this.head;
        for (let i = 0; i < this.size; i++) {
            if (current!.value === song) {
                return i;
            }
            current = current!.next;
        }
        return -1
    }

    deleteSong(song: T): void {
        const songIndex: number = this.getSongIdx(song);
        if (songIndex === -1) return; // Song not found, exit early

        let currentNode = this.head;
        for (let i = 0; i < songIndex; i++) {
            currentNode = currentNode!.next!;
        }

        if (currentNode) {
            if (currentNode.prev) {
                currentNode.prev.next = currentNode.next;
            }
            if (currentNode.next) {
                currentNode.next.prev = currentNode.prev;
            }
        }
        this.size--;
    }

    displayCurrentSong(): T | null {
        return this.head ? this.head.value : null;
    }

    nextSong(): T | null {
        if (!this.head) return null;
        this.head = this.head.next;
        return this.displayCurrentSong();
    }

    prevSong(): T | null {
        if (this.size === 0) return null;
        if (!this.head) return null;
        this.head = this.head.prev;
        return this.displayCurrentSong();
    }

    shuffleSong(): void {
        if (!this.size) return
        const songs: T[] = [];

        let current = this.head
        while (current) {
            current = current.next;
            songs.push(current!.value);
        }

        // Shuffle the songs array
        for (let i = this.size - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [songs[i], songs[j]] = [songs[j], songs[i]];
        }

        this.head = null
        this.tail = null;
        this.size = 0;

        for (let song of songs) {
            this.addSong(song);
        }
    }

    showSongList(): T[] {
        let list: T[] = [];
        for (let i = 0; i < this.size; i++) {
            list.push(this.head!.value);
            this.head = this.head!.next;
        }
        return list
    }
}