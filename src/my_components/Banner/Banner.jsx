import banner from '../../assets/books.jpg';
const Banner = () => {
    return (
        <div>
            <div className="flex justify-between items-center bg-gray-100 rounded-xl p-14 my-8 max-lg:flex-col-reverse gap-10">
                <div className='max-lg:text-center'>
                    <h1 className="max-lg:text-4xl text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                    <button className="btn bg-green-500 w-32 px-3 text-white font-bold py-2 rounded-md mt-9">View The List</button>
                </div>
                <img src={banner} alt="" className='rounded-xl' />
            </div>
        </div>
    );
};

export default Banner;