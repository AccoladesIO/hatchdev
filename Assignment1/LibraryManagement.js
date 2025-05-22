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
