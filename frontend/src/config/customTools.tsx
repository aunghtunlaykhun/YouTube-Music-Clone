import {useRef,useEffect, useDebugValue} from 'react';
import { IoPlaySkipBackSharp, IoPlaySkipForwardSharp } from 'react-icons/io5';
import { RiPauseLargeFill, RiPlayLargeFill } from 'react-icons/ri';
import { useMusicContext} from './music_context';
import React from 'react';
import { LuShuffle } from 'react-icons/lu';
import { BiRepeat } from 'react-icons/bi';


export const Play_Pause = React.memo(()=>{
    console.log('re-render in play-pause')
    const {resultState,dispatch} = useMusicContext();

    const changePlayPause = ()=>{
        dispatch({type:'toggle_play_pause'})
    }
    useEffect(()=>{
        if(resultState.audioRef?.current && resultState.isOnplay){
            resultState.audioRef.current.play();
        }else{
            resultState.audioRef?.current?.pause();
        }
    },[resultState.isOnplay])
    return(
        <>
            {
                resultState.isOnplay ?
                <button onClick={changePlayPause} className="play_pause">
                    <RiPauseLargeFill/>
                </button>
                :
                <button onClick={changePlayPause} className="play_pause">
                    <RiPlayLargeFill/>
                </button>
            }
        </>
    )
})


export const ProgressBarC = ()=>{
    
    const {resultState,dispatch} = useMusicContext();
    const audios = resultState.audioRef?.current;
    useEffect(()=>{
        if(!audios) return;
        const handleProgress = ()=>{
        if(audios.buffered.length > 0){
        const progress = (audios.buffered.end(0) / resultState.duration) * 100;
        dispatch({ type: 'update_progress', payload:progress});
        }
        }
        audios?.addEventListener('timeupdate',handleProgress);
        return ()=>{
            audios?.removeEventListener('timeupdate',handleProgress);
        }
    },[audios,resultState.currentTime,resultState.duration])
    console.log('re-render in progressC');
    return(
        <>
            <div className="progress_bar" style={{width:`${resultState.progress}%`}}>
            </div>
        </>
    )
}

type timeProps = {
    duration:number
}
type currentTimeProps = {
    currentTime:number
}

export const CurrentTime = React.memo(()=>{
    console.log('re-render in currenttime')
    const {resultState,dispatch} = useMusicContext();
    const audios = resultState.audioRef?.current;
    useEffect(()=>{
        const handleCurrentTime = ()=>{
            // setCurrentTime(audios.currentTime);
            dispatch({type:'update_currentTime',payload:audios?.currentTime as number})
        }
        audios?.addEventListener('timeupdate',handleCurrentTime);
        return ()=>{
            audios?.removeEventListener('timeupdate',handleCurrentTime);
        }

    },[audios])

    return(
        <p>{Math.floor(resultState.currentTime as number / 60)}:{Math.floor(resultState.currentTime as number % 60)}</p>
    )
})

export const CurrentProgress = ()=>{
    const {resultState} = useMusicContext();
    const current = (resultState.currentTime / resultState.duration) * 100;
    return(
        <div className="current-progress-container" style={{width:`${current}%`,backgroundColor:'white'}}>
            <div className="circle"></div>
        </div>
    )
}

export const Duration = React.memo(()=>{
    console.log('re-render in duration')
    const {resultState,dispatch} = useMusicContext();
    const audios = resultState.audioRef?.current;
    useEffect(()=>{
        if(!audios) return;
        const handleDuration = ()=>{
            // setDuration(audios.duration);
            dispatch({type:'update_duration',payload:audios?.duration as number})
        }
        audios?.addEventListener('loadedmetadata',handleDuration);
        return ()=>{
            audios?.removeEventListener('loadedmetadata',handleDuration);
        }

    },[audios])
    return(
        <p>{Math.floor(resultState.duration / 60)}:{Math.floor(resultState.duration % 60)}</p>
    )
})

export const Play_back = ()=>{
    return(
        <button className="back_next back">
            <IoPlaySkipBackSharp/>
        </button>
    )
}

export const Play_Next = ()=>{
    return(
        <button className="back_next next">
            <IoPlaySkipForwardSharp/>
        </button>
    )
}

export const Shuffle = ()=>{
    return(
        <button className="shuffle_btn">
            <LuShuffle/>
        </button>
    )
}

export const Repeat = ()=>{
    return(
        <button className="repeat_btn">
            <BiRepeat/>
        </button>
    )
}
