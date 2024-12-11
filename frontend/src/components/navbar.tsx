import { GoHome } from "react-icons/go"
import { IoIosHeartEmpty } from "react-icons/io"
import { IoSearch } from "react-icons/io5"
import { LuLibrary } from "react-icons/lu"
import { Link } from "react-router-dom"


export const Navbar = ()=>{
    return(
        <>
            <div className="nav">
            <Link to="/home" className="Link">
                <GoHome className="nav_icon" />
                <p>Home</p>
            </Link>
            <Link to="/search" className="Link">
                <IoSearch className="nav_icon" />
                <p>Search</p>
            </Link>
            <Link to="/" className="Link">
                <IoIosHeartEmpty className="nav_icon" />
                <p>Favorites</p>
            </Link>
            <Link to="/" className="Link">
                <LuLibrary className="nav_icon" />
                <p>Your Library</p>
            </Link>
            </div>
        </>
    )
}