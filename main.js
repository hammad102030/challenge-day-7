// Question 1: OOP Related
// Create a TypeScript class Book that has properties for title, author, publicationYear, and genre. The class should have methods to:
// 1. Display the book details.
// 2. Check if the book is a recent publication (within the last 5 years).
// 3. Change the genre of the book.
// 4. Check if the book's author matches a given author name.
// *Hints:*
// - Use console.log to print book details in the displayDetails method.
// - In the isRecent method, get the current year using new Date().getFullYear() and compare it with publicationYear.
// - Update the genre property in the changeGenre method.
// - In the isAuthor method, compare the author property with the given author name.
var Book = /** @class */ (function () {
    function Book(titles, author, publicationYear, genre) {
        this.titles = titles;
        this.author = author;
        this.publicationYear = publicationYear;
        this.genre = genre;
    }
    Book.prototype.displayDetails = function () {
        console.log("Title is: ".concat(this.titles, "."));
        console.log("Author is: ".concat(this.author, "."));
        console.log("Publicalion year is: ".concat(this.publicationYear, "."));
        console.log("Genre is: ".concat(this.genre, "."));
    };
    Book.prototype.isRecent = function () {
        var currentYear = new Date().getFullYear();
        return currentYear - this.publicationYear <= 5; // false
    };
    Book.prototype.changeGenre = function (newGenre) {
        console.log((this.genre = newGenre));
    };
    Book.prototype.isAutor = function (authorName) {
        return this.author.toUpperCase() === authorName.toUpperCase();
    };
    return Book;
}());
var myBook = new Book("The Great Gatsby", "F. Scott Fitzgerald", 2000, "Fiction");
myBook.displayDetails();
// Title is: The Great Gatsby.
// Author is: F. Scott Fitzgerald.
// Publicalion year is: 2000.
// Genre is: Fiction.
console.log(myBook.isRecent()); // Output: false
myBook.changeGenre("Classic Fiction"); // Output: Classic Fiction
console.log(myBook.isAutor("F. Scott Fitzgerald")); // Output: true
function findPersonByCity(people, city) {
    for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
        var person = people_1[_i];
        for (var _a = 0, _b = person.address; _a < _b.length; _a++) {
            var address = _b[_a];
            if (address.city.toUpperCase() === city.toUpperCase()) {
                return { name: person.name, email: person.email };
            }
        }
    }
    return undefined;
}
var peoples = [
    {
        name: "Hammd",
        age: 20,
        email: "hammad@example.com",
        phone: 987 - 654 - 3210,
        address: [
            {
                street: "123 Main St",
                city: "Karachi",
                state: "kk",
                zipcode: 123456,
            },
        ],
    },
];
var result = findPersonByCity(peoples, "karachi");
if (result) {
    console.log("Name: ".concat(result.name, ", Email: ").concat(result.email, "."));
}
else {
    console.log("No person found in the specified city.");
}
// Output: Name: Hammd, Email: hammad@example.com.
