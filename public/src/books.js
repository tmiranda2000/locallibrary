function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let bookReturned = books.filter((book) => books.borrow.every((borrow) => borrow.returned === true ));
  let bookBorrowed = books.filter((book) =>
  book.borrows.some((borrow) => borrow.returned === false)
 );
 let lastArray = [...bookReturned, ...bookBorrowed]
 return lastArray;
}

function getBorrowersForBook(book, accounts) {
 let acctIds = book.borrows.map((borrow) => borrow.id);

 let result = acctIds.map((accountId) => accounts.find((account) => account.id === accountId))
 return result;

}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
