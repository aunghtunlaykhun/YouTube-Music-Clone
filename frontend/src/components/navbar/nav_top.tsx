import { AiOutlineMenu } from "react-icons/ai"
import { IoSearchOutline, IoSettingsOutline } from "react-icons/io5"
import { MdOutlineConnectedTv, MdOutlineSettingsSuggest } from "react-icons/md"
import './nav.css';
import { Profile } from "../profile/profile";
import { useClickContext } from "../../config/click_context";
import React, { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSpotifyConext } from "../../config/spotify_Music";
import axios from "axios";
import  SearchBox  from "../../admin/component/searchbox/searchbox";
const Nav_Top = ()=>{
    const {clickState,dispatch} = useClickContext();
    const [openSearch,setOpenSearch] = useState(false);
    const [searchKw,setSearchKw] = useState('');
    const location = useLocation();

    console.log('re-render in navbar');
    const openMenu = ()=>{
        dispatch({type:'toggle_Menu'});
        // setOnMenu(prev=>!prev);
    }
    const openSearchBar = ()=>{
        setOpenSearch(prev=>!prev);
    }

    const searchData = (kw:string)=>{
        setSearchKw(kw);
        console.log(kw);
    }

    
    
    return (
        <div className={`nav_top_container`}>
        <div className={`nav_top_subContainer `}>
        <div className={`nav_top ${location.pathname !== '/home'?'outt':''} ${location.pathname === '/playlist'?'pl':''}`}>
                <div className="left_content">
                    <button className="menu_button" onClick={()=>openMenu()}>
                        <AiOutlineMenu/>
                    </button>
                    
                    <div className="nav_logo">
                        <img src="/music_logo2.png"/>
                        <p>Music</p>
                    </div>
                </div>
                <div className={`center_content ${clickState.isCollapse?'active':''}`} >
                    <div className="search_content">
                        <button>
                        <IoSearchOutline/>
                        </button>
                        
                        <input placeholder="search songs,albums,artist,podcasts" onChange={(e)=>searchData(e.target.value)} />
                        <SearchBox kws={searchKw} content="searchAll" />
                    
                    </div>
                    {
                        openSearch && 
                        <input className="flexi_search" placeholder="Search" onChange={(e)=>searchData(e.target.value)} />
                    }
                </div>
                <div className="right_content">
                    
                    <div className="right_content_profile">
                        <button className="magic_search" onClick={openSearchBar}>
                            <IoSearchOutline/>
                        </button>
                        <button>
                            <MdOutlineConnectedTv/>
                        </button>
                        {/* <button className="profile_button">
                            <img src="/music_logo2.png" />
                        </button> */}
                        <details className="profile_button">
                            <summary>
                                <img src="/music_logo2.png" />
                            </summary>
                            <div className="profile_container">
                                <Profile/>
                            </div>
                        </details>
                        <div className="right_content_empty"></div>
                    </div>
                </div>
        </div>
        
        
        
    </div>
   
    </div>
    )
}

export default React.memo(Nav_Top);