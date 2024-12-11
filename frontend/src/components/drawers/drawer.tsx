import { AiOutlineMenu } from "react-icons/ai"
import './drawer.css'
import { IoMdHome } from "react-icons/io"
import { IoCompassSharp } from "react-icons/io5"
import { LuLibrary } from "react-icons/lu"
import { GiUpgrade } from "react-icons/gi"
import { useClickContext } from "../../config/click_context"
import React from "react"
import { useNavigate,useLocation } from "react-router-dom"

const Drawer = ()=>{
    const {clickState,dispatch} = useClickContext();
    const navigate = useNavigate();
    const location = useLocation();
    console.log('re-render in drwawer')

    const openMenu = ()=>{
        dispatch({type:'toggle_Menu'});
    }

    const goTo = (name:string)=>{
        navigate(name);
    }

    return(
        <div className={`drawer_subContainer ${clickState.isCollapse && location.pathname === '/home' ?'active':''}`}>
            <button className="menu_button" onClick={()=>openMenu()}><AiOutlineMenu/>
            </button>
            <div className={`drawer_items ${clickState.isCollapse ?'active':''} ${location.pathname !== '/home' ? 'outt':''}`}>
                <button className={`home_btn ${location.pathname === '/home'?'active':''}`} onClick={()=>goTo('/home')}>
                    <IoMdHome/>
                    <p>Home</p>
                </button>
                <button className={`home_btn ${location.pathname === '/explore'?'active':''}`} onClick={()=>goTo('/explore')}>
                <IoCompassSharp/>
                <p>Explore</p>
                </button>
                <button className={`home_btn ${location.pathname === '/library'?'active':''}`} onClick={()=>goTo('/library')}>
                <LuLibrary/>
                <p>Library</p>
                </button>
                <button className={`home_btn ${location.pathname === '/upgrade'?'active':''}`} onClick={()=>goTo('/upgrade')}>
                <GiUpgrade/>
                <p>Upgrade</p>
                </button>
            </div>
        </div>
    )
}

export default React.memo(Drawer);