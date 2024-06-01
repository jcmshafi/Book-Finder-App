import { useState } from "react";
import booksData from "../../data/data.json";
import BookList from "./BookList/BookList";
import Header from "./Header/Header";

const MainSection = () => {
  const [books, setBooks] = useState(booksData);

  function handleOnFavourite(bookId) {
    const bookIndex = books.findIndex((book) => book.id === bookId);
    const favouriteBooks = [...books];

    favouriteBooks[bookIndex].isFavourite =
      !favouriteBooks[bookIndex].isFavourite;
    setBooks(favouriteBooks);
  }

  function handleSearch(searchTerm) {
    // console.log(searchTerm);

    const filtered = books.filter((book) =>
      book.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setBooks([...filtered]);
  }

  function handleSort(sortBy) {
    const sortedBooks = [...books];
    if (sortBy === "name_asc") {
      sortedBooks.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "name_desc") {
      sortedBooks.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === "year_asc") {
      sortedBooks.sort((a, b) => a.year - b.year);
    } else if (sortBy === "year_desc") {
      sortedBooks.sort((a, b) => b.year - a.year);
    }
    setBooks(sortedBooks);
  }
  // const [counters, setCounters] = useState('');

  // function handleIncrementClick(index) {
  //   const nextCounters = counters.map((counter) => counter === index)
  // }
  return (
    <>
      <div className="mb-8 lg:mb-10 mx-auto max-w-7xl">
        <Header onSearch={handleSearch} onSort={handleSort} />
        <BookList books={books} onFavourite={handleOnFavourite} />
      </div>
    </>
  );
};

export default MainSection;
