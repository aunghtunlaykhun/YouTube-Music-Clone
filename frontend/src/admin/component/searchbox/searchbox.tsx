import React,{ useCallback, useEffect, useState } from "react"
import { musicType } from "../../../data/data"
import { content_list } from "../../../data/data";
import {Moods} from '../../../data/data';
import './searchbox.css';
import { useSelector } from "react-redux";
import { RootState } from "../../../ReduxState/store";
import { DataType } from "../../../helper/function";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";

type kwProps = {
    kws:string,
    limit?:number,
    content:string,
}

const SearchBox = ({kws,content}:kwProps)=>{

    const [searchContent,setSearchContent] = useState<string[]>([]);
    const searchList = [...musicType,...content_list];
    const {globalSongs} = useSelector((state:RootState)=>state.songs);
    const searching = useCallback((keyword:string)=>{
        const lowerKey = keyword.toLowerCase();
        const result = searchList.filter((word)=>(word.toLowerCase().includes(lowerKey)));
        setSearchContent(result);
    },[searchList]);

    console.log('re-render in searchbox');

    const searchAllData = React.useMemo(()=>{
        return (kws:string)=>{
            const lowerkw = kws.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
            console.log(lowerkw);
            const searchData = [...globalSongs.map((item:DataType)=>[
                item.artist,
                item.album,
                item.songName,
                item.type,
            ]  
            )].flat();
            const result = searchData.filter((word)=>word.replace(/\s+/g,'').toLowerCase().includes(lowerkw)).map((w)=>w.toLowerCase());
            const uniqueResult = new Set(result);
            setSearchContent(Array.from(uniqueResult));}
        
    },[globalSongs])

    const DebounceSearch = (func:(...args:any)=>void,time:number)=>{
       let timeout:number;
       return (...args:any)=>{
        clearTimeout(timeout);
        timeout = setTimeout(()=>{
            func(...args)
        },time)
       }
    }

    const debounceSearching = useCallback(DebounceSearch(searching,1000),[searching]);

    const debounceAllSearch = useCallback(DebounceSearch(searchAllData,1000),[searchAllData]);

    useEffect(()=>{
        if(content === 'type'){
           debounceSearching(kws);
        }else if(content == 'searchAll'){
           debounceAllSearch(kws);
        }
    },[kws])

    
    const navigate = useNavigate();
    const selectDataSearch = (item:string)=>{
        
        navigate('/search',{
            state:item
        });
    }

    return(
        <>
            <div className="searchbox-container">
               {
                searchContent && 
                searchContent.slice(0,6).map((item,index)=>(
                    <div className="type_item" key={index} onClick={()=>selectDataSearch(item)}>
                        <button>
                            <IoIosSearch/>
                        </button>
                        <p className="px-4 capitalize" >{item}</p>
                        <div className="bline"></div>
                    </div>
                ))
               }
            </div>
        </>
    )
}

export default React.memo(SearchBox);