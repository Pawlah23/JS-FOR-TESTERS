
    // Defining the Book class
class Book {
    constructor(title, author, description, numberOfPages, reading) {
      this.title = title; 
      this.description = description;
      this.numberOfPages = numberOfPages;
      this.author = author;
      this.reading = reading;
    }
  }
  
  // Create an array of books
  const books = [
    new Book('Gone with the wind', 'Margaret Mitchell', 'Set in the American South during the Civil War and Reconstruction era.', 180, true),
    new Book('1984', 'George Orwell', 'A dystopian novel portraying a totalitarian regime and surveillance society.', 336, false),
    new Book('Pride and Prejudice', ' Jane Austen','A beloved classic featuring the spirited Elizabeth Bennet and the enigmatic Mr. Darcy', 328, true),
    new Book('The Catcher in the Rye', 'J.D. Salinger', 'A beloved classic featuring the spirited Elizabeth Bennet and the enigmatic Mr. Darcy.', 224, false)
  ];
  
  // Loop through the books array and log books where reading is true
  for (let i = 0; i < books.length; i++) {
    if (books[i].reading) {
      console.log('Title: ${books[i].title}');
      console.log('Author: ${books[i].author}');
      console.log('Description: ${books[i].description}');
      console.log('Number of Pages: ${books[i].numberOfPages}');
      console.log('=============================');
    }
}