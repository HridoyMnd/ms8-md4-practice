import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {

    const { bookId } = useParams();
    const data = useLoaderData();
    const id = parseInt(bookId);
    const book = data.find(book => book.bookId === id)
    const { image, bookName, author, review, tags, totalPages, rating, publisher, yearOfPublishing, category } = book;
    return (
        <div className="border border-red-600 grid grid-cols-5 gap-10">
            <div className="bg-gray-100 p-14 col-span-2">
                <img src={image} alt="" className="w-72 mx-auto"  />
            </div>
            <div id="content" className="col-span-3">
                <h1 className="font-bold text-4xl">{bookName}</h1>
                <h3 className="text-lg font-medium">{author}</h3>
                <h3 className="text-lg font-medium">{category}</h3>
                <h3>review:<p>{review}</p></h3>
                <div>Tags:                 {
                    tags.map(e => <button className="font-medium bg-green-50 w-36 py-2 rounded-2xl text-green-400 ml-3">{e}</button>)
                }</div>
                <p>Number of Page: {totalPages}</p>
                <p>Publisher: {publisher}</p>
                <p>Year of Publishing:{yearOfPublishing}</p>

                <p>Rating: {rating}</p>
                <div id="btns">
                    <button className="border w-32 py-2 rounded-md border-green-400">Read</button>
                    <button className="border w-32 py-2 rounded-md border-green-400">WishList</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;