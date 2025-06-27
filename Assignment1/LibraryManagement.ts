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


class Book {
    name: string;
    noInStock: number;

    constructor(name: string, noInStock: number) {
        this.name = name;
        this.noInStock = noInStock;
    }
}

class Member {
    name: string;
    borrowedBooks: Book[] = [];

    constructor(name: string) {
        this.name = name;
    }

    borrowBook(book: Book) {
        if (!this.borrowedBooks.includes(book)) {
            if (book.noInStock > 0) {
                this.borrowedBooks.push(book);
                book.noInStock--;
            }

            console.log(`${book.name} borrowed by ${this.name}, now available in stock: ${book.noInStock}`);
        } else {
            console.log(`${book.name} is already borrowed by ${this.name}. Cannot borrow again.`);
        }
    }
    returnBook(book: Book) {
        const index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1);
            book.noInStock++;
            console.log(`${book.name} returned by ${this.name}, now available in stock: ${book.noInStock}`);
        } else {
            console.log(`${book.name} was not borrowed by ${this.name}`);
        }
    }
}

class Libz {
    books: Book[] = [];

    addBook(book: Book) {
        this.books.push(book);
    }

    showAvailableBooks() {
        // this.books.forEach((book) => {
        //   if (book.isAvailable) {
        //     console.log(book);
        //   }
        // });
    }
}

const book1 = new Book("To Kill a Mockingbird", 5);
const book2 = new Book("1984", 9);
const book3 = new Book("The Great Gatsby", 6);
const book4 = new Book("Moby Dick", 10);

const lib2 = new Libz();
lib2.addBook(book1);
lib2.addBook(book2);
// lib2.showAvailableBooks()

const dayo = new Member("Dayo");
dayo.borrowBook(book1);
dayo.borrowBook(book1);

const jane = new Member("Jane");
jane.borrowBook(book1);
jane.returnBook(book2);
console.log(dayo.borrowedBooks);
jane.borrowBook(book2);
console.log(jane.borrowedBooks);

// console.log(dayo.borrowedBooks);