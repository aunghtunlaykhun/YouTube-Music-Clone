import { Suspense, useCallback, useMemo, useState } from 'react'
import './App.css'
import { Navbar } from './components/navbar'
import {Button} from './components/button'
import { Outlet, Route,BrowserRouter as Router, Routes, useLocation, useNavigate } from 'react-router-dom'
import  Nav_Top  from './components/navbar/nav_top';
import  Drawer  from './components/drawers/drawer';
import { PlayingBar } from './components/playingBar/playingbar';
import { useEffect } from 'react';
import  Watch  from './pages/watch/watch';
import { MusicContext } from './config/music_context';
import { ClickContextProvider, useClickContext } from './config/click_context';
import React from 'react';
import { Songs } from './data/songs'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './ReduxState/store'
import { setSongs } from './ReduxState/songState'

function App() {
  
  const location = useLocation();
  const {clickState,dispatch} = useClickContext();
  const {currentPlayingUrl} = useSelector((state:RootState)=>state.songs);
  
  const navigate = useNavigate();

  const gotoWhere = useCallback(()=>{
    if(location.pathname === '/watch'){
      navigate(-1);
    }else if (location.pathname !== '/watch'){
      navigate('/watch');
    }
  },[location.pathname])

  console.log('re-render in app');
    
  return (
      <div className="container_div">
        <div className="nav_content">
            <Nav_Top/>
        </div>
          <div className={`drawer_container ${clickState.isCollapse?'apea':'dis'}`}>
              <Drawer/>
          </div>
         
          <div className="playing-bar-container" onClick={gotoWhere}>
          {
            currentPlayingUrl.audioUrl &&
            <PlayingBar/>
          }
          </div>
         
        {
          location.pathname !== '/watch' ?
            <div className={`outlet_container ${clickState.isCollapse?'active':''}`}>
              <Suspense fallback={<div>loading...</div>}>
                <Outlet/>
              </Suspense>
            </div>
                : 
              <div className={`watch_drawer`}>
                <Watch/>
              </div>
        }
      </div>
  )
}

export default App;
