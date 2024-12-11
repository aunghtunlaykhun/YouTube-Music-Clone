import './content.css';
import { content_list } from '../../data/data';
import React,{useState,useEffect,Suspense,forwardRef,memo, useMemo} from 'react';
import axios from 'axios';
import Album from '../albumForyou/album';
import { useInView } from 'react-intersection-observer';
import { CustomContentContainer } from '../../helper/function';


type contentProps = {
    child1:React.ReactNode,
    child2:React.ReactNode,
    child3:React.ReactNode
}

export const Content = ({child1,child2,child3}:contentProps)=>{

   const {ref:foryouRef,inView:isForyouInView} = useInView();
   const {ref:releaseRef,inView:isReleaseInView} = useInView();
   const {ref:kpopRef,inView:isKpopInView} = useInView();

   useEffect(()=>{
    console.log(releaseRef);
    console.log('is Release in View',isReleaseInView);
   },[isReleaseInView])

   useEffect(()=>{
    console.log(kpopRef);
    console.log('is Kpop in View',isKpopInView);
   },[isKpopInView])

    console.log('component mount in content');
    return(
        <div className="content_subContainer">
            <div className="second_nav">
                <div className="empty_nav">
                </div>
                <div className="content_div">
                    <div className="content">
                        <button className="yt_music_btn">
                            <input type="radio" id="yt_btn" name="yt_check" className="yt_input" defaultChecked />
                        <label htmlFor="yt_btn" className="yt_music">YT Music</label>
                        </button>
                        <button className="library_btn">
                            <input type="radio" className="lib_input" name="yt_check" id="lib_btn"/>
                        <label htmlFor="lib_btn" className="library" >LIBRARY</label>
                        </button>
                    </div>
                </div>
                <div className="empty_nav">
                </div>
        </div>
            <div className="real_content">
                <div className="real_content_title">
                    <div className="empty_nav">
                    </div>
                    <div className="honmono_content">
                    <div className="content_list_container">
                        <div className="content_list">
                                {
                                    content_list.map((item,index)=>(
                                        <button key={index+item}>{item}</button>
                                    ))
                                }
                            </div>
                    </div>
                    </div>
                    <div className="empty_nav">
                    </div>
                </div>
                <div className="s-container">

                 <CustomContentContainer >
                    <Album/>
                </CustomContentContainer>

               <div ref={foryouRef}>
                    { isForyouInView && child1}
               </div>
               
               <div ref={releaseRef}>
                    { isReleaseInView && child2}
               </div>
               
               <div ref={kpopRef}>
                    { isKpopInView && child3}
               </div>
                               
                {/* <CustomContentContainer  >
                    <Foryou headTitle="New Releases" kw='newreleases' fkey={import.meta.env.VITE_NEWRELEASES_FETCH_ID} />
                </CustomContentContainer>
                
                <CustomContentContainer >
                    <Foryou headTitle="K-Pop" kw='kpop' fkey={import.meta.env.VITE_KPOP_FETCH_ID} />
                </CustomContentContainer>  */}
               
                </div>
            </div>
        </div>
    )
}