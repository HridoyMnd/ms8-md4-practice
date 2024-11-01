import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('booksData.json')
            .then((res) => res.json())
            .then((data) => setBooks(data))
    }, [])


    return (
        <div>
            <h2 className="text-4xl font-bold text-center mb-10">Books</h2>
            <p>Books length is : {books.length}</p>
            <div className="book-container grid grid-cols-3 gap-10 max-sm:grid-cols-1 max-lg:grid-cols-2">
                {
                    books.map(book => <Book book={book} key={book.bookId}></Book> )
                }
            </div>

        </div>
    );
};

export default Books;