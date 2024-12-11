import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../ReduxState/store";
import { setCurrentPlayingUrl } from "../ReduxState/songState";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useMemo, useState } from "react";

export type DataType = {
    audio:string,
    songName:string,
    type:string,
    artist:string,
    album:string,
    section:string,
    image:string,
    _id:string
}


export const useEnableMusic = ()=>{

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const enableMusic = useCallback((item:DataType,forData:DataType[])=>{
        dispatch(setCurrentPlayingUrl({audioUrl:item.audio,image:item.image,artist:item.artist,songName:item.songName}));
        navigate('/watch',{
            state:forData
        })
    },[dispatch])
    return enableMusic;
}

export const usefetchSearchData = (search:string)=>{
    const {globalSongs} = useSelector((state:RootState)=>state.songs);
    const [filterSong,updateFilterSong] = useState<DataType[] | null>(null);

    useEffect(()=>{
        const searchKw = search.toLowerCase();
        const filteredSong = globalSongs.filter((item)=>{
            return(
                item.album.toLowerCase().includes(searchKw) || item.artist.toLowerCase().includes(searchKw) || item.songName.toLowerCase().includes(searchKw) || item.type.toLowerCase().includes(searchKw)
            )
        })
        if(filteredSong){
            updateFilterSong(filteredSong);
        }
    },[search,globalSongs])

    return filterSong;
}
type childType = {
    children:React.ReactNode;
}

export const CustomContentContainer = ({children}:childType)=>{
    
        return (
            <div className="real_main_content">
                
                    <>
                        <div className="empty_nav"></div>
                        <div className="for_you_container">{children}</div>
                        <div className="empty_nav"></div>
                    </>
                
            </div>
        );
}