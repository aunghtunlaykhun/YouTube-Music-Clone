import './home.css';
import { Content } from '../../components/contents/content';
import React from 'react';

const LazyComponent = React.lazy(()=>import('../../components/foryou/foryout'))

const ChildForyou = <LazyComponent kw="foryou" fkey={import.meta.env.VITE_FORYOU_FETCH_ID} headTitle="Music For you" />
const ChildRelease = <LazyComponent kw="newreleases" fkey={import.meta.env.VITE_NEWRELEASES_FETCH_ID} headTitle="New releases" />
const ChildKpop = <LazyComponent kw="kpop" fkey={import.meta.env.VITE_KPOP_FETCH_ID} headTitle="Kpop" />

const Home = ()=>{
    console.log('re-render in home')
    return (
        <div className="home_container">
            <div className="content_container">
                <Content child1 = {ChildForyou} child2 = {ChildRelease} child3 = {ChildKpop} />
            </div>
        </div>
    )
}

export default React.memo(Home);