/**
 Use the following array of book objects to practice the array functions for map, find and
filter. Test each of your answers to the below tasks.
 */

const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    ];

//Although I understand the concept of what I was trying to do, this was really hard to code.
//Most of the code is from stackOverflow 


//a) Write a function getBookTitle(bookId) that uses the find function to return the
//title of the book object with the matching id.
function getBookTitle(bookId) {
    const book = books.find(book => book.id === bookId);
    return book ? book.title : 'Book not found';
}

console.log(getBookTitle(2));

//b) Write a function getOldBooks() that uses the filter function to return all book
//objects written before 1950.
function getOldBooks() {
    const oldBooks = books.filter(book => book.year < 1950);
    return oldBooks;
}

console.log(getOldBooks());


//c) Write a function addGenre() that uses the map function to add a new genre property
//to all of the above books, with the value ‘classic’.
function addGenre() {
    const booksWithGenre = books.map(book => {
        return { ...book, genre: 'classic' };
    });
    return booksWithGenre;
}
console.log(addGenre());


/*
d) (Extension) Write a function getTitles(authorInitial) that uses map and
filter together to return an array of book titles for books written by authors whose
names start with authorInitial.
 */

/* I was expecting the code to return the authors with Initials without having to provide the Initials 
in the console.log as in lines 63 and 74, but it was really a challenge*/
function getTitles(authorInitial) {
    const titles = books
        .filter(book => book.author.startsWith(authorInitial))
        .map(book => book.title);
    return titles;
}

console.log(getTitles('J'));
console.log(getTitles('F'));

/*
e) (Extension) Write a function latestBook() that uses find and forEach to get the
book with the most recent publication date.
*/
function latestBook() {
    let mostRecentBook = null;
    books.forEach(book => {
        if (!mostRecentBook || book.year > mostRecentBook.year) {
            mostRecentBook = book;
        }
    });
    return mostRecentBook;
}
console.log(latestBook());

