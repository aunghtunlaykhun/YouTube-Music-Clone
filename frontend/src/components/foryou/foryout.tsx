import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md';
import './foryou.css';
import { useRef,RefObject, useEffect, useState,useCallback, useMemo } from 'react';
import React from 'react';
import { Songs } from '../../data/songs';
import {useSelector,useDispatch} from 'react-redux';
import { useSpotifyConext } from '../../config/spotify_Music';
import { customAxios } from '../../config/customAxios';
import { useFetchQuery } from '../../Query/fetch';
import { useNavigate } from 'react-router-dom';
import { setSongs,setCurrentPlayingUrl } from '../../ReduxState/songState';
import { RootState } from '../../ReduxState/store';
import { DataType } from '../../helper/function';
import { useEnableMusic } from '../../helper/function';

type propType = {
    headTitle:string,
    kw:string,
    fkey:string,
}

export const useScrollRef = ()=>{
    const scrollRef = useRef<HTMLDivElement>(null);
    // const {spotifyState,dsipatch} = useSpotifyConext();
    const scrollContainer = (direction:string)=>{
        if(scrollRef.current){
            const scrollAmount = 300;
            scrollRef.current.scrollBy({
                left:direction === 'right' ? scrollAmount : -scrollAmount,
                behavior:'smooth',
            })
        }else{
            console.log('no ref')
        }
    }
    return {scrollRef,scrollContainer}
}

const Foryou = ({headTitle,kw,fkey}:propType)=>{
    console.log('key is ',kw);
    console.log('fkey is ',fkey);
    const {scrollRef,scrollContainer} = useScrollRef();
    const dispatch = useDispatch();
    console.log('component mount in For you',headTitle);
    const url = '/listen';

    const {data:foryouData,error,isError,isLoading,refetch} = useFetchQuery(fkey,url,kw);

    console.log('data in ',headTitle,foryouData?.data.data);

    const PriForyouData = useMemo(()=>{
        if(foryouData?.data.data){
            return foryouData.data.data;
        }
    },[foryouData?.data.data])

        useEffect(()=>{
            if(PriForyouData){
                    dispatch(setSongs(PriForyouData))
                    console.log('re-render in useEffect')
                }else{
                    console.log('data does not exists in ',headTitle);
                }
        },[PriForyouData])

        useEffect(()=>{
            console.log('dispatch is changing')
        },[PriForyouData])
    
    const startListen = useEnableMusic();

    const gotoHome = useCallback(()=>{
        const navigate = useNavigate();
        
        navigate('/posts');
    },[])
    
    
    return(
        <div className="foryou_subContainer"> 
            <div className="foryou_slider_container">
                <div className="title_div">
                    <h2 className="foryou_title">{headTitle}</h2>
                    <div className="button_container">
                        <button className="playAll_btn" onClick={gotoHome}>Play All</button>
                        <div className="arrow_div">
                            <button onClick={()=>scrollContainer('left')}><MdOutlineArrowBackIosNew/></button>
                            <button onClick={()=>scrollContainer('right')}><MdOutlineArrowForwardIos/></button>
                        </div>
                    </div>
                </div>
                <div className="foryou_slider_items" ref={scrollRef}>
                      {
                        PriForyouData && PriForyouData?.map((item:DataType)=>(
                            <div className="foryou_childc" key={item._id} onClick={()=>startListen(item,PriForyouData)}>
                                <img src={`${item.image}`} />
                                <div className="foryou_info">
                                    <h4>{item.songName}</h4>
                                    <p>{item.artist}</p>
                                </div>
                            </div>
                        ))
                    } 
                </div>
            </div>
        </div>
    )
}

export default Foryou;