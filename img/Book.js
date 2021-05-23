Book.js
class Book {
constructor(
title,
author,
ISBN,
pubYear,
pageNumber,
currentPage,
readStatus
) {
this.title = title;
this.author = author;
this.ISBN = ISBN;
this.pubYear = pubYear;
this.pageNumber = pageNumber;
this.currentPage = currentPage;
this.readStatus = readStatus;
}
updateCurrentPage(newCurrentPage) {
this.currentPage = newcurrentPage;
}
updatereadStatus(newreadStatus) {
this.readStatus = newreadStatus;
}
}
export default Book;
