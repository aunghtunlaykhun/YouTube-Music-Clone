import { IoIosArrowBack } from "react-icons/io";
import './song.css'
import { HiOutlineDotsVertical } from "react-icons/hi";
import { TbCopyPlus } from "react-icons/tb";
import { customAxios } from "../../config/customAxios";
import { useEffect, useState } from "react";

const Song = ()=>{
    const [song,setSong]  = useState('');

    useEffect(()=>{
        const fetchSong = async ()=>{
            const response = await customAxios('/listen');
            console.log(response.data.data.downloadUrl);
            setSong(response.data.data.downloadUrl);
        }
        fetchSong();
    },[])
    return(
        <div className="openSong_container">
            <img src="/song2.png" className="song_background" />
            <div className="song_content">
                <div className="icon_div">
                    <button><IoIosArrowBack/></button>
                    <button><HiOutlineDotsVertical/></button>
                </div>
                
                <div className="playing_song_div">
                    <img src="/song2.png" className="playing_song" />
                </div>

                <div className="playing_tool_container">
                    <div className="playing_tool_first_div">
                        <button><TbCopyPlus/></button>
                        <div className="flex flex-col items-center">
                            <h1 className="font-bold">Get Away</h1>
                            <p className="text-xs">Great Good Fine Ok</p>
                        </div>
                        <button>
                            <HiOutlineDotsVertical/>
                        </button>
                    </div>

                    <div>
                        {
                            song && 
                            <audio controls>
                            <source src="https://music.youtube.com/watch?v=rQM5uVSdRAw&si=c8saTfJYnsL8a9w0" type="audio/mpeg" />
                        </audio>
                        }
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Song;