import './album.css';
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md';
import { useScrollRef } from '../foryou/foryout';
import { useFetchQuery } from '../../Query/fetch';
import React,{ useCallback, useEffect, useMemo, useState } from 'react';
import { DataType } from '../../helper/function';
import { useNavigate } from 'react-router-dom';
import { setSongs } from '../../ReduxState/songState';
import { useDispatch } from 'react-redux';


 const Album = ()=>{
    const key = import.meta.env.VITE_ALBUM_FETCH_ID;
    const url = '/listen';
    const kw = 'albumforyou';
    const {data:albumData,error,isLoading,isError} = useFetchQuery(key,url,kw);
    const dispatch = useDispatch();
    
    const {scrollRef,scrollContainer} = useScrollRef();

    const PriAlbumData = useMemo(()=>{
        return albumData?.data.data;
    },[albumData?.data.data]);
    
    const [uniqueName,setUniqueName] = useState<Array<String>>();
    const [albumGroup,setAlbumGroup] = useState<Record<string,Array<DataType>>>();
    const artistNameSet = new Set<String>();
   
    useEffect(()=>{
        if(PriAlbumData){
            dispatch(setSongs(PriAlbumData));
            let i = 0;
           for(i ; i < PriAlbumData.length; i++){
                const artistName = PriAlbumData[i].artist;
                artistNameSet.add(artistName);
            }
           setUniqueName(Array.from(artistNameSet))
           const group = Object.groupBy(PriAlbumData as Array<DataType>,(album)=>album.artist);
           setAlbumGroup(group as Record<string,Array<DataType>>);
        }
    },[PriAlbumData])
    console.log('data in album',albumData?.data.data);

    const navigate = useNavigate();
    const gotoPlaylist = useCallback((item:DataType[])=>{
        navigate('/playlist',{
            state:item
        });
    },[])

    return(
        <div className="album_container">
            <div className="album_slider_container">
                <div className="album_slider_title">
                    <h1>ALBUMS FOR YOU</h1>
                    <div className="arrow_div">
                        <button onClick={()=>scrollContainer('left')}><MdOutlineArrowBackIosNew/></button>
                        <button onClick={()=>scrollContainer('right')}>
                            <MdOutlineArrowForwardIos/>
                        </button>
                    </div>
                </div>
                <div className="album_slider_items" ref={scrollRef}>
                  {
                    albumGroup &&  uniqueName?.map((item,index)=>(
                            <div className="album_childc" key={'sid'+index} onClick={()=>gotoPlaylist(albumGroup[item as string])} >
                          <img src={albumGroup[item as string][0].image}/> 
                        <div className="album_info">
                            <h4>{
                                albumGroup[item as string][0].artist
                                }
                            </h4>
                            <p>{albumGroup[item as string][0].album}</p>
                        </div> 
                    </div>
                        ))
                    } 
                   
                </div>
            </div>
        </div>
    )
}

export default React.memo(Album);