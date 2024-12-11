import { HiOutlineDotsHorizontal, HiOutlineDotsVertical } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import './profile.css'
import { Album } from "../../components/album";
import { Link } from "react-router-dom";


const Profile = ()=>{

    return(
        <div className="profile_container">
            <div className="profile">
                <img src="/artist2.png" className="profile_background" />
                <div className="profile_content">
                    <div className="sticky_div">
                        <button><IoIosArrowBack/></button>
                        <h1 className="profile_name">The Weeknd</h1>
                    </div>
                    <div className="content_container">
                    <div className="follow_button_div">
                        <button className="follow_button">Follow</button>
                        <button className="follow_dot_icon"><HiOutlineDotsVertical/></button>
                    </div>

                    <div className="follow_info">
                        <p className="listeners">105.1M monthly listeners</p>
                    </div>
                    
                    <div className="profile_quotes">
                        <p>The Weeknd <span className="text-gray-200/80">Less Than Zero . </span>
                            The Weeknd <span className="text-gray-200/80">Stargril Interlude . </span> 
                            The Weeknd <span className="text-gray-200/80">Die For You - Remix . </span>
                            The Weeknd <span className="text-gray-200/80">Reminder . and more</span>
                        </p>
                    </div>
                    
                    <div className="song_container">
                        <h1>Song</h1>
                        <div className="song_div">
                            <div className="subSong_div">
                                <Link to="/song" className="song_item">
                                    <img src="/song1.png" className="songImage" />
                                    <div className="flex flex-col text-sm gap-y-0">
                                        <p className="font-bold">Die for you</p>
                                        <p className="text-xs text-gray-200/80">2022 . Album</p>
                                    </div>
                                </Link>
                                <button><HiOutlineDotsHorizontal/></button>
                            </div>
                            <div className="subSong_div">
                                <div className="song_item">
                                    <img src="/song2.png" className="songImage" />
                                    <div className="flex flex-col text-sm gap-y-0">
                                        <p className="font-bold">Die for you</p>
                                        <p className="text-xs text-gray-200/80">2022 . Album</p>
                                    </div>
                                </div>
                                <button><HiOutlineDotsHorizontal/></button>
                            </div>
                            <div className="subSong_div">
                                <div className="song_item">
                                    <img src="/song3.png" className="songImage" />
                                    <div className="flex flex-col text-sm gap-y-0">
                                        <p className="font-bold">Die for you</p>
                                        <p className="text-xs text-gray-200/80">2022 . Album</p>
                                    </div>
                                </div>
                                <button><HiOutlineDotsHorizontal/></button>
                            </div>

                            <div className="subSong_div">
                                <div className="song_item">
                                    <img src="/song3.png" className="songImage" />
                                    <div className="flex flex-col text-sm gap-y-0">
                                        <p className="font-bold">Die for you</p>
                                        <p className="text-xs text-gray-200/80">2022 . Album</p>
                                    </div>
                                </div>
                                <button><HiOutlineDotsHorizontal/></button>
                            </div>

                            <div className="subSong_div">
                                <div className="song_item">
                                    <img src="/song3.png" className="songImage" />
                                    <div className="flex flex-col text-sm gap-y-0">
                                        <p className="font-bold">Die for you</p>
                                        <p className="text-xs text-gray-200/80">2022 . Album</p>
                                    </div>
                                </div>
                                <button><HiOutlineDotsHorizontal/></button>
                            </div>

                            <div className="subSong_div">
                                <div className="song_item">
                                    <img src="/song3.png" className="songImage" />
                                    <div className="flex flex-col text-sm gap-y-0">
                                        <p className="font-bold">Die for you</p>
                                        <p className="text-xs text-gray-200/80">2022 . Album</p>
                                    </div>
                                </div>
                                <button><HiOutlineDotsHorizontal/></button>
                            </div>
                        </div>
                    </div>

                    <div className="album_container">
                       <Album/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;