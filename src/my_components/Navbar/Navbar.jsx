import { FaBarsStaggered } from "react-icons/fa6";
const Navbar = () => {
    return (
        <div className="navbar bg-base-100 px-4 shadow-md justify-between">
            <div className="">
                <a className="text-2xl font-bold">Book Vibe</a>
            </div>
            <div className=" hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="">Home</a></li>
                    <li><a href="#about">Listed Books</a></li>
                    <li><a href="#services">Pages to Read</a></li>
                </ul>

            </div>
            <div className="flex gap-3">
                <FaBarsStaggered className="md:hidden text-2xl" />
                <button className="btn bg-green-500 px-3 py-2 rounded-md w-28 font-semibold text-white">Sign In</button>
                <button className="btn bg-blue-300 px-3 py-2 rounded-md w-28  font-semibold text-white">Sign Up</button>
            </div>
        </div>
    );
};

export default Navbar;