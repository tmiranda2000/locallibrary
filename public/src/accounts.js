function findAccountById(accounts, id) {
return accounts.find((account) => account.id.includes(id));
}  

function sortAccountsByLastName(accounts) {
  return accounts.sort((lastA, lastB) => lastA.name.last.toLowerCase() > lastB.name.last.toLowerCase()? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
  let result = 0
  const getBooks = books.forEach((book) => {
    if (!!books.borrows) {
      book.borrows.forEach((accounts) => {
        if(accounts.id === account.id){
          result ++;
        }
      });
    }
  });
    return result
  
}

function getBooksPossessedByAccount(account, books, authors) {
  const borrowedBooks = [];
  books.forEach((book) => {
    let bookBorrows = book.borrows;
    bookBorrows.forEach((borrow) => {
      if (borrow.id === account.id && !borrow.returned) {
        borrowedBooks.push(book);
      }
    });
  });
  let result = borrowedBooks.map((book) => {
    return { ...book, author: getAuthor(book, authors) };
  });
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
