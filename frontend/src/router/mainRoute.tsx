import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home  from "../pages/Home/home";
import { Navigate } from "react-router-dom";
import React, { Suspense, useEffect, useState } from "react";
import { Authentication } from "../pages/Auth/authentication";
import { Register } from "../pages/Register/register";
import { Intro } from "../pages/Intro/intro";
const LazyProfile = React.lazy(()=>import('../pages/Profile/profile'));
const LazySearch = React.lazy(()=>import('../pages/Search/search'));
const LazySong = React.lazy(()=>import('../pages/Song/song'));
import { AdminRoute } from "../admin/route";
import Playlist from "../pages/Playlist/playlist";
import Search from "../pages/Search/search";

const LazyExplore = React.lazy(()=>import('../pages/Explore/explore'));
const LazyWatch = React.lazy(()=>import('../pages/watch/watch'));

export const Router = ()=>{
  const [timeout,setTime] = useState(false);
  useEffect(()=>{
    const time = setTimeout(()=>{
      setTime(true);
    },3000);
    return ()=>clearTimeout(time);
  },[])
  const userRoute = [
    {
      path: "/",
      element:<App/>,
      children : [
        {
          path:'/',
          element:<Navigate to="/intro" />
        },
        {
          path:'/intro',
          element:!timeout ? <Intro/> : <Navigate to="/register"/>
        },
        {
          path:'/home',
          element:<Home/>
        },
        {
          path:'/authentication',
          element:<Authentication/>
        },
        {
          path:"/search",
          element:<LazySearch/>
        },
        {
          path:"/profile",
          element:<LazyProfile/>
        },
        {
          path:"/song",
          element:<LazySong/>
        },  
        {
          path:'/watch',
          element:<LazyWatch/>
        },
        {
          path:'/explore',
          element:<LazyExplore/>
        },
        {
          path:'/playlist',
          element:<Playlist/>
        },
        {
          path:'/search',
          element:<Search/>
        }
      ],
    },
    {
      path:'/register',
      element:<Register/>
    },
  ]
  const router = createBrowserRouter([...AdminRoute,...userRoute]);

    return(
        <RouterProvider router={router} />
    )
}