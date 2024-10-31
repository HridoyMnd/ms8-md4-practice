import { FaStarHalfStroke } from "react-icons/fa6";
const Book = ({ book }) => {
    const { image, bookName, author, rating, category } = book;
    return (
        <div className="border py-5 px-4 rounded-xl">
            <div className="img bg-gray-100 py-6 rounded-2xl mb-6">
                <img src={image} alt="" className="h-56 w-[44%] mx-auto" />
            </div>
            <div>
                <div>
                    <button className="font-medium bg-green-50 w-36 py-2 rounded-2xl text-green-400">Young Adult</button>
                    <button className="font-medium bg-green-50 ml-3 w-36 py-2 rounded-2xl text-green-400">Identity</button>
                </div>
                <h1 className="text-2xl font-bold my-4">
                    {bookName}
                </h1>
                <h4 className="font-medium">By : {author}</h4>
                <div className="font-medium flex justify-between items-center mt-4">
                    <h5>{category}</h5>
                    <h5 className="flex items-center gap-2">
                       <p>{rating}</p>
                       <p><FaStarHalfStroke /></p>
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default Book;