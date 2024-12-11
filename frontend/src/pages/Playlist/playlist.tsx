import './playlist.css';
import { Play_Pause } from '../../config/customTools';
import { MdAddToPhotos } from 'react-icons/md';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { IoIosPlay, IoIosSquareOutline } from 'react-icons/io';
import { LiaThumbsDown, LiaThumbsUp } from 'react-icons/lia';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { useLocation } from 'react-router-dom';
import { DataType } from '../../helper/function';
import { RiPlayLargeFill } from 'react-icons/ri';
import { useEnableMusic } from '../../helper/function';

const Playlist = ()=>{
    const location = useLocation();
    const albumData = location.state;

    const listenTo = useEnableMusic();

    console.log(albumData);
    return(
        <>
            <div className="playlist_container" data-content="/artist1.png">
            {
                albumData &&
                <div className="bg-img" data-content={`${albumData[0].image}`} style={{backgroundImage:`url(${albumData[0].image})`}} ></div>
            }
                <div className="playlist_subContainer">
                    {/* first */}
                    <div className="playlist_tools_container">
                        <div className="playlist_tools_subContainer">
                            {
                                albumData &&
                                <>
                                <h1>🎨 {albumData[0].artist}</h1>
                            <img src={albumData[0].image} />
                            <h1>{albumData[0].album}</h1>
                            <div>
                                <h4>Album : 2019</h4>
                                <h5>{albumData.length} songs : 45 minutes</h5>
                            </div>
                                </>
                            }
                            <div className="player_tools">
                                <button className="tools_btn"><MdAddToPhotos/></button>
                                {/* <Play_Pause/> */}
                                <button className="play_pause" onClick={()=>listenTo(albumData[0],albumData)}>
                                    <RiPlayLargeFill/>
                                </button>
                                <button className="tools_btn"><BiDotsVerticalRounded/></button>
                            </div>
                        </div>
                    </div>
                    {/* second */}
                    <div className="playlist_lists_container">
                        {
                            albumData.map((item:DataType,index:number)=>(
                            <div className="playlist_lists_parent" key={'albumdls83'+index}>
                                <div className="playlist_child">
                                    <div className="play_number">
                                        <p>{index + 1}</p>
                                        <button className="play_btn"><IoIosPlay/></button>
                                    </div>
                                    <div className="playlist_listname">
                                        <h4>{item.songName}</h4>
                                        <h5>120K plays</h5>
                                     </div>
                                </div>
                                <div className="playlist_minutes">
                                    <h3>3:30</h3>
                                <div className="edits">
                                    <button className="down"><LiaThumbsDown/></button>
                                    <button className="up"><LiaThumbsUp/></button>
                                    <button className="dots"><HiOutlineDotsVertical/></button>
                                    <button className="square"><IoIosSquareOutline/></button>
                                </div>
                            </div>
                        </div>
                            ))
                        }
                    </div>

                    {/* third */}

                    


                </div>
            </div>

        </>
    )
}

export default Playlist;