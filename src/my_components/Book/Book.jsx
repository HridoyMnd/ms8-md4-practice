import { FaStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Book = ({ book }) => {
    const { bookId, image, bookName, author, rating, category, tags} = book;
    return (
        <Link to={`books/${bookId}`}>
            <div className="border py-5 px-4 rounded-xl">
                <div className="bg-gray-100 py-6 rounded-2xl mb-6">
                    <div className="h-64">
                        <img src={image} alt="img" className="h-full object-cover w-52 mx-auto" />
                    </div>
                </div>
                <div>
                    {
                        tags.map(e =><button className="font-medium bg-green-50 w-36 py-2 rounded-2xl text-green-400 ml-3">{e}</button>)
                    }
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
        </Link>
    );
};

export default Book;