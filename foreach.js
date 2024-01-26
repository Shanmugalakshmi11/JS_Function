// JSON data
const jsonData = `
{
    "books": [
      {
        "title": "Das Parfum",
        "author": "Patrick Süskind",
        "year": 1985,
        "genres": ["Roman", "Historischer Roman", "Thriller"]
      },
      {
        "title": "Der kleine Prinz",
        "author": "Antoine de Saint-Exupéry",
        "year": 1943,
        "genres": ["Kinderbuch", "Philosophisches Märchen"]
      },
      {
        "title": "Harry Potter und der Stein der Weisen",
        "author": "J.K. Rowling",
        "year": 1997,
        "genres": ["Fantasy", "Jugendliteratur"]
      }
    ]
  }
  
`;

// Parse the JSON data
const data = JSON.parse(jsonData);

// 1. All authors
console.log('All authors:');
data.books.forEach(book => {
  console.log(book.author);
});

// 2. The first genre listed in each case
console.log('\nThe first genre listed in each case:');
data.books.forEach(book => {
  if (book.genres.length > 0) {
    console.log(book.genres[0]);
  }
});

// 3. All genres of “Perfume”
console.log('\nAll genres of “Perfume”:');
data.books.forEach(book => {
  if (book.title === 'Perfume') {
    console.log(book.genres.join(', '));
  }
});

// 4. All book titles that start with “D”!
console.log('\nAll book titles that start with “D”!');
data.books.forEach(book => {
  if (book.title.charAt(0).toUpperCase() === 'D') {
    console.log(book.title);
  }
});
