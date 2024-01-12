function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let booksCheckedOut = books.filter(
    (book) =>
      book.borrows.filter((record) => record.returned === false).length > 0
  );
  return booksCheckedOut.length;
}

function getMostCommonGenres(books) {
  const genresOfBooks = books.map((book) => book.genre);

  const genreCounts = [];

  countGenre(genresOfBooks, genreCounts);
  if (genreCounts.length > 5) {
    return genreCounts.slice(0, 5);
  }
  return genreCounts;
}




function countGenre(genresOfBooks, genreCounts) {
  genresOfBooks.forEach((genre) => {
    const location = genreCounts.findIndex(
      (genreCount) => genreCount.name === genre
    );

    if (location >= 0) {
      genreCounts[location].count = genreCounts[location].count + 1;
    } else {
      genreCounts.push({ name: genre, count: 1 });
    }
  });
  genreCounts.sort((a, b) => b.count - a.count);
}

function getMostPopularBooks(books) {
  return books
    .map((book) => {
      return { name: book.title, count: book.borrows.length };
    })
    .sort((a, b) => (a.count < b.count ? 1 : -1))
    .slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  const result = authors.map((author) => {
    const fullName = `${author.name.first} ${author.name.last}`;
    const booksByAuthor = books.filter((book) => book.authorId === author.id);
    const totalBorrows = booksByAuthor.reduce(
      (accum, book) => accum + book.borrows.length,
      0
    );
    return { name: fullName, count: totalBorrows };
  });
  result.sort((authorA, authorB) => authorB.count - authorA.count);
  result.splice(5);
  return result;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
