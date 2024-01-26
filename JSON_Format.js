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

// Output the required information
console.log('Title of the first book:', data.books[0].title);
console.log('Author of the second book:', data.books[1].author);
console.log('Year of publication of the third book:', data.books[2].year);
console.log('Genres of the first book:', data.books[0].genres.join(', '));
