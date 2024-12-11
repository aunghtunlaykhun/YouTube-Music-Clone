import './watch.css';
import { musicType } from '../../data/data';
import { IoIosArrowDown } from 'react-icons/io';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { MdOutlineFullscreen } from 'react-icons/md';
import { LiaWindowMinimizeSolid } from 'react-icons/lia';
import { RxEnterFullScreen } from 'react-icons/rx';
import { useLocation, useNavigate } from 'react-router-dom';
import { Tools } from '../../components/Tools/tool';
import { MusicContext } from '../../config/music_context';
import { useMusicContext } from '../../config/music_context';
import { useClickContext } from '../../config/click_context';
import  {Related}  from '../../components/Related/related';
import { useSelector } from 'react-redux';
import { RootState } from '../../ReduxState/store';
import { DataType } from '../../helper/function';

const Watch = ()=>{
    const navigate = useNavigate();
    const {clickState} = useClickContext();
    console.log('re-render in watch');
    const location = useLocation();
    console.log(location.state);

    const relatedData = location.state as DataType[];
    
    const goBack = ()=>{
        navigate(-1);
    }

    const {currentPlayingUrl} = useSelector((state:RootState)=>state.songs);

    const MusicContainer = ()=>{
        return(
            <div className="music_container">
                {
                    currentPlayingUrl.image ?
                    <img src={currentPlayingUrl.image as string}/> : 
                    <div className="empty_image"></div>
                }
            </div>
        )
    }

    return(
        <div className={`watch_container`}>
            <div className={`watch_subContainer ${clickState.isCollapse?'active':''}`}>
                <MusicContainer/>
                <Related relatedData={relatedData}/>
            </div>
            {/* small screen */}
            <div className="s-watch_subContainer">
                <div className="s-watch-top-btn">
                    <button onClick={goBack}><IoIosArrowDown/></button>
                    <button><BiDotsVerticalRounded/></button>
                </div>
                <div className="music-container-div">
                    <MusicContainer/>
                    <div className="music-screen-tools">
                        <button className="mini"><LiaWindowMinimizeSolid/></button>
                        <button className="wider"><RxEnterFullScreen/></button>
                    </div>
                </div>
                <div className="title_player_tools">
                    <h1>Keep Smiling (Official Video)</h1>
                    <h4>LANY</h4>
                </div>
                <div className="tools_container">
                    <Tools/>
                </div>
            </div>
        </div>
    )
}

export default Watch;