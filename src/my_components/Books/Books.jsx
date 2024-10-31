import { useEffect, useState } from "react";

const Books = () => {
    const [Books, setBooks] = useState([])
    useEffect(() => {
        fetch('booksData.json')
        .then((res) => res.json())
        .then((data) => setBooks(data))
    }, [])


    return (
        <div>
            <h2>{Books.length}</h2>
        </div>
    );
};

export default Books;