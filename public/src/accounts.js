function findAccountById(accounts, id) {
return accounts.find((account) => account.id.includes(id));
}  

function sortAccountsByLastName(accounts) {
  return accounts.sort((lastA, lastB) => lastA.name.last.toLowerCase() > lastB.name.last.toLowerCase()? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
  let result = 2
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
   const borrowedBooks = []
 books.forEach((book) => {
    const checkedOut = book.borrows.find((borrow) => !borrow.returned);
   if(checkedOut && account.id === checkedOut.id){
     const author = authors.find((author) => author.id === book.authorId)
    const checkedOutBook = {...book, author}
    borrowedBooks.push(checkedOutBook)
   }
 });
  return borrowedBooks;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
