function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
   const returned = books.filter((book) => book.borrows[0].returned);
  const unreturned = books.filter ((book) => !book.borrows[0].returned);
  return [unreturned, returned];
}


  function getBorrowersForBook(book, accounts) {
  // create a variable that access borrows from books
    const { borrows } = book;
  // create a variable for a function that maps borrows
    const renters = borrows.map(({ id, returned })=> {
      // in the callback function, use .find() to locate the account that matches the renter's ID
      const account = accounts.find(account => account.id === id);
      // return the matching account, along with the `returned` info
      return {
        ...account,
        returned,
      };
    });
  // return renters
    return renters
  // use .sort to order the companies names in aplhabetical order
      .sort((borrowA, borrowB) => {
        const companyA = borrowA.company;
        const companyB = borrowB.company;
        return companyA.localeCompare(companyB);
      })
      // use .slice to narrow the list of renters to 10 or less
      .slice(0, 10);
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};