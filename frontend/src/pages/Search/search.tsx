import { IoSearch } from "react-icons/io5"
import './search.css';
import { useLocation } from "react-router-dom";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoIosPlay } from "react-icons/io";
import { TbPlaylistAdd } from "react-icons/tb";
import { usefetchSearchData } from "../../helper/function";
import { useFetchQuery } from "../../Query/fetch";

const Search = () => {
    const location = useLocation();
    console.log(location.state);
    const filterSong = usefetchSearchData(location.state);
    const lastIndex = filterSong ? filterSong.length - 1 : 0;
    const slicedFilterSong = filterSong?.length as number > 4 ? filterSong?.slice(1,4) : filterSong?.slice(1,lastIndex);
    console.log(filterSong);
    console.log('re-render in search');
    return (
        <div className="search_container">
            <div className="content_div">
                <div className="content">
                    <div className="yt_music_btn">
                        <input type="radio" id="yt_btn" name="yt_check" className="yt_input" defaultChecked />
                        <label htmlFor="yt_btn" className="yt_music">YT Music</label>
                    </div>
                    <div className="library_btn">
                        <input type="radio" className="lib_input" name="yt_check" id="lib_btn" />
                        <label htmlFor="lib_btn" className="library" >LIBRARY</label>
                    </div>
                </div>

                {/* top result */}
                <div className="top_result">
                    <h1 className="title">Top Result</h1>
                    <div className="tr_container">
                        <div className="first_tr">
                            <button className="more"><HiOutlineDotsVertical /></button>
                            <div className="tr-player">
                                <img src='/artist1.png' />
                                <div className="tr-desc">
                                    <h1>{filterSong && filterSong.length > 0 ? filterSong[0]?.songName : 'No Data Search'}</h1>
                                    <h5>{filterSong && filterSong.length > 0 ? filterSong[0]?.artist : 'No Data Search'}</h5>
                                    <div className="btns">
                                        <div className="play">
                                            <IoIosPlay />
                                            <p>Play</p>
                                        </div>
                                        <div className="save">
                                            <TbPlaylistAdd />
                                            <p>Save</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* second tr */}
                        <div className="second_tr">
                            
                            {
                                filterSong && 
                                filterSong.slice(1,4).map((item,index)=>(
                                    <div className="tr-data" key={'lsid'+index}>
                                        <img src={item.image}/>
                                    <div>
                                    <h3>{item.songName}</h3>
                                    <p>{item.artist}</p>
                                </div>
                            </div>
                                ))
                            }
                            
            
                        </div>
                    </div>
                </div>

                {/* songs */}
                <div className="mt-8">
                    <h1 className="title">Songs</h1>
                    <div className="songs-container">
                        {
                            filterSong &&
                            filterSong.map((item, index) => (
                                <div className="songs-item" key={'iiw9s'+index}>
                                    <img src={item.image} />
                                    <div>
                                        <h4>{item.songName}</h4>
                                        <h5>{item.artist}</h5>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;