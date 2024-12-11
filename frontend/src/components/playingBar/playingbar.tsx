import { RiArrowLeftSFill, RiPauseLargeFill, RiPlayLargeFill, RiRepeatLine } from 'react-icons/ri';
import './playingbar.css';
import { IoCaretDownSharp, IoPlaySkipBackSharp, IoPlaySkipForwardSharp } from 'react-icons/io5';
import { BiDislike, BiLike } from 'react-icons/bi';
import { RxDotsVertical, RxShuffle } from 'react-icons/rx';
import { MdVolumeUp } from 'react-icons/md';
import { Extra } from '../extra/extra';
import { useRef, useState,useEffect } from 'react';
import { Play_Pause,Play_Next,Play_back,Shuffle,Repeat, ProgressBarC, CurrentTime, CurrentProgress, Duration } from '../../config/customTools';
import { useMusicContext } from '../../config/music_context';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../ReduxState/store';
import { setCurrentPlayingUrl } from '../../ReduxState/songState';
export const PlayingBar = ()=>{
    
    const {resultState,dispatch} = useMusicContext();
    console.log('play state is on play or not',resultState.isOnplay);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const skipRef = useRef<HTMLDivElement | null>(null);
    const audios = resultState.audioRef?.current;
    const [isDrag,setIsDrag] = useState(false);
    const [hoverTime,setHoverTime] = useState<number | null>(null);
    const animationFrameId = useRef<number | null>(null);

    const {currentPlayingUrl} = useSelector((state:RootState)=>state.songs);
    const dispatchRedux = useDispatch();
    console.log(currentPlayingUrl);

    const calculateProgress = (clientX:number)=>{
        if(!skipRef.current || !resultState.duration) {
            return {newTime:0,newProgress:0}
        }
        const rect = skipRef.current.getBoundingClientRect();
        const offsetX = clientX - rect.left;
        let newProgress = (offsetX / rect.width) * 100;
        newProgress = Math.max(0,Math.min(newProgress,100));
        const newTime = (newProgress / 100) * resultState.duration;

        return {newTime,newProgress};
    }

    const updateUI = (clientX:number)=>{
        const {newTime,newProgress} = calculateProgress(clientX);
        if(newTime !== undefined){
            setHoverTime(newTime);
            dispatch({type:'update_currentTime',payload:newTime});
            dispatch({type:'update_progress',payload:newProgress});
            if(audios){
                audios.currentTime = newTime;
            }
        }
    }

    const handleMouseMove = (e:MouseEvent)=>{
        if(isDrag){
            if(animationFrameId?.current){
                cancelAnimationFrame(animationFrameId.current);
            }
            animationFrameId.current = requestAnimationFrame(()=>updateUI(e.clientX));
        }
    }

    const handleMouseUp = ()=>{
        if(isDrag){
            setIsDrag(false);
            setHoverTime(null);
        }
    }
    const handleMouseleave = ()=>{
        if(isDrag){
            setIsDrag(false);
            setHoverTime(null);
        }
    }

    const handleMouseDown = (e:React.MouseEvent<HTMLDivElement,MouseEvent>)=>{
        e.preventDefault();
        setIsDrag(true);
        updateUI(e.clientX);
    }

    useEffect(()=>{

    })

    useEffect(()=>{

        if(audioRef){
            audioRef?.current?.load();
        }

        dispatch({type:'insert_audioRef',payload:audioRef as React.RefObject<HTMLAudioElement>});

        if(currentPlayingUrl.audioUrl){
            dispatch({type:'update_currentTime',payload:0});
            dispatch({type:'update_progress',payload:0});
            dispatch({type:'set_play_pause',payload:true})
        }else{
            resultState.audioRef?.current?.pause();
            dispatch({type:'set_play_pause',payload:false})
        }
        return ()=>{
            console.log('Clean up function called')
            console.log(resultState.audioRef);
            resultState.audioRef?.current?.pause();
            dispatch({type:'set_play_pause',payload:false});
            dispatch({type:'update_duration',payload:0});
            dispatch({type:'update_progress',payload:0});
            dispatch({type:'update_currentTime',payload:0});
        }
    },[currentPlayingUrl])

    // useEffect(()=>{
    //     if(!resultState.audioRef?.current){
    //         dispatchRedux(setCurrentPlayingUrl({audioUrl:null,image:null}));
    //     }
    // },[resultState.audioRef])

    console.log(resultState.isOnplay);

    useEffect(()=>{
       document.addEventListener('mousemove',handleMouseMove);
       document.addEventListener('mouseup',handleMouseUp);
       document.addEventListener('mouseleave',handleMouseleave);

       return ()=>{
        document.removeEventListener('mousemove',handleMouseMove);
        document.removeEventListener('mouseup',handleMouseUp);
        document.removeEventListener('mouseleave',handleMouseleave);
        if(animationFrameId.current){
            cancelAnimationFrame(animationFrameId?.current);
        }
       }
    },[isDrag])

    const handleClick = (e:React.MouseEvent<HTMLDivElement | MouseEvent>)=>{
        e.stopPropagation();
    }

    return(
        <div className="playingbar_subContainer">
            <audio ref={audioRef}  className="audio_element" controls style={{display:'none'}} preload="auto" >
                <source src={`${currentPlayingUrl.audioUrl}`} type="audio/mpeg" />
            </audio>
            <div className="player_container">
                {/* controls */}
                {
                    hoverTime && 
                    <div className="time-tooltip" style={{left:`${(hoverTime / resultState.duration) * 100}%`}}>
                        {Math.floor(hoverTime / 60)} :
                        {Math.floor(hoverTime % 60)}
                    </div>
                }
                <div className="skippable-div" ref={skipRef} onMouseDown = {handleMouseDown} onClick={handleClick}>
                    <ProgressBarC/>
                    <CurrentProgress/>
                </div>
                <div className="controls_container" onClick={handleClick}>
                    <div className="controller_div">
                        <Play_back/>
                        <Play_Pause/>
                        <Play_Next/>
                    </div>
                    <CurrentTime/>
                    <Duration/>
                </div>
                {/* info */}
                <div className="info_container" onClick={handleClick}>
                    <div className="info_title">
                        <img src="/song3.png"/>
                        <div className="info_content">
                            <h4>Dissolve</h4>
                            <p className="sub">Absofacto•41Mviews•824Klikes</p>
                        </div>
                    </div>
                    <div className="favor">
                        <button className="dislike"><BiDislike/></button>
                        <button className="like"><BiLike/></button>
                        <button className="dots">
                           <details>
                                <summary> <RxDotsVertical/></summary>
                                <div className="extra_container">
                                    <Extra/>
                                </div>
                           </details>
                        </button>
                    </div>
                </div>
                {/* functions */}
                <div className="functions_container" onClick={handleClick}>
                    <div></div>
                    <div className="responsive_function">
                        <button className="reopen"><RiArrowLeftSFill/></button>
                        <button className="r3"><RxShuffle/></button>
                        <button className="r2"><RiRepeatLine/></button>
                        <button className="r1"><MdVolumeUp/></button>
                    </div>
                    <button><IoCaretDownSharp/></button>
                </div>
            </div>
        </div>
    )
}