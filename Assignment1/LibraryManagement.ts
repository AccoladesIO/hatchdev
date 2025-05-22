class LibraryManagement {
    public name: string;
    public role: 'ADMIN' | 'GUEST';
    protected static book: string[] = [];
    protected static guestList: string[] = [];
    protected static adminList: string[] = [];

    constructor(name: string, role: 'ADMIN' | 'GUEST') {
        this.name = name,
            this.role = role
    }
    static viewBooks(): void {
        console.log(`Available books: ${LibraryManagement.book.length !== 0 ? LibraryManagement.book.join(', ') : '0'} `);
    }
    static viewGuestList(): void {
        console.log(`Guest list: ${LibraryManagement.guestList.length !== 0 ? LibraryManagement.guestList.join(', ') : '0'}`);
    }
    static viewAdminList(): void {
        console.log(`Admin list: ${LibraryManagement.adminList.length !== 0 ? LibraryManagement.adminList.join(', ') : '0'}`);
    }
}

class Admin extends LibraryManagement {
    constructor(name: string) {
        super(name, 'ADMIN');
        LibraryManagement.adminList.push(name);
        console.log(`${name} is an admin`);
    }
    static addBook(book: string): void {
        LibraryManagement.book.push(book);
        console.log(`${book} added to the library`);
    }
    static removeBook(book: string): void {
        const index = LibraryManagement.book.indexOf(book);
        if (index !== -1) {
            LibraryManagement.book.splice(index, 1);
            console.log(`${book} removed from the library`);
        } else {
            console.log(`${book} not found in the library`);
        }
    }
}


class Guest extends LibraryManagement {
    constructor(name: string) {
        super(name, 'GUEST');
        LibraryManagement.guestList.push(name);
        console.log(`${name} is a guest`);
    }
    static borrowBook(book: string): void {
        const index = LibraryManagement.book.indexOf(book);
        if (index !== -1) {
            LibraryManagement.book.splice(index, 1);
            console.log(`${book} borrowed from the library`);
        } else {
            console.log(`${book} not available in the library`);
        }
    }
    static returnBook(book: string): void {
        LibraryManagement.book.push(book);
        console.log(`${book} returned to the library`);
    }
}
