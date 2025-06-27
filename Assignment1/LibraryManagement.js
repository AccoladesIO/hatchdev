"use strict";
class LibraryManagement {
    constructor(name, role) {
        this.name = name,
            this.role = role;
    }
    static viewBooks() {
        console.log(`Available books: ${LibraryManagement.book.length !== 0 ? LibraryManagement.book.join(', ') : '0'} `);
    }
    static viewGuestList() {
        console.log(`Guest list: ${LibraryManagement.guestList.length !== 0 ? LibraryManagement.guestList.join(', ') : '0'}`);
    }
    static viewAdminList() {
        console.log(`Admin list: ${LibraryManagement.adminList.length !== 0 ? LibraryManagement.adminList.join(', ') : '0'}`);
    }
}
LibraryManagement.book = [];
LibraryManagement.guestList = [];
LibraryManagement.adminList = [];
class Admin extends LibraryManagement {
    constructor(name) {
        super(name, 'ADMIN');
        LibraryManagement.adminList.push(name);
        console.log(`${name} is an admin`);
    }
    static addBook(book) {
        LibraryManagement.book.push(book);
        console.log(`${book} added to the library`);
    }
    static removeBook(book) {
        const index = LibraryManagement.book.indexOf(book);
        if (index !== -1) {
            LibraryManagement.book.splice(index, 1);
            console.log(`${book} removed from the library`);
        }
        else {
            console.log(`${book} not found in the library`);
        }
    }
}
class Guest extends LibraryManagement {
    constructor(name) {
        super(name, 'GUEST');
        LibraryManagement.guestList.push(name);
        console.log(`${name} is a guest`);
    }
    static borrowBook(book) {
        const index = LibraryManagement.book.indexOf(book);
        if (index !== -1) {
            LibraryManagement.book.splice(index, 1);
            console.log(`${book} borrowed from the library`);
        }
        else {
            console.log(`${book} not available in the library`);
        }
    }
    static returnBook(book) {
        LibraryManagement.book.push(book);
        console.log(`${book} returned to the library`);
    }
}
class Book {
    constructor(name, noInStock) {
        this.name = name;
        this.noInStock = noInStock;
    }
}
class Member {
    constructor(name) {
        this.borrowedBooks = [];
        this.name = name;
    }
    borrowBook(book) {
        if (!this.borrowedBooks.includes(book)) {
            if (book.noInStock > 0) {
                this.borrowedBooks.push(book);
                book.noInStock--;
            }
            console.log(`${book.name} borrowed by ${this.name}, now available in stock: ${book.noInStock}`);
        }
        else {
            console.log(`${book.name} is already borrowed by ${this.name}. Cannot borrow again.`);
        }
    }
    returnBook(book) {
        const index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1);
            book.noInStock++;
            console.log(`${book.name} returned by ${this.name}, now available in stock: ${book.noInStock}`);
        }
        else {
            console.log(`${book.name} was not borrowed by ${this.name}`);
        }
    }
}
class Libz {
    constructor() {
        this.books = [];
    }
    addBook(book) {
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
