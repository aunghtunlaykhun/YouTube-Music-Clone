import { RiGalleryView2 } from 'react-icons/ri';
import './mainsection.css';
import { MdFilterList } from 'react-icons/md';
import { BiSortAlt2 } from 'react-icons/bi';
import { AiOutlineShrink, AiOutlineThunderbolt } from 'react-icons/ai';
import { IoSearch } from 'react-icons/io5';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { useState } from 'react';

export const MainSection = ()=>{
    const [active,setActive] = useState(0);
    const today = new Date();
    const year = today.getFullYear();
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const month = months[today.getMonth()];
    const day = String(today.getDate()).padStart(2,'0');
    const changeActive = (num:number)=>{
        setActive(num);
    }
    const Editors = ()=>{
        return (
            <div className="main_header_second">
                    <button>
                        <MdFilterList/>
                    </button>
                    <button>
                        <BiSortAlt2/>
                    </button>
                    <button>
                        <MdFilterList/>
                    </button>
                    <button>
                        <AiOutlineThunderbolt/>
                    </button>
                    <button>
                        <IoSearch/>
                    </button>
                    <button>
                        <HiOutlineDotsHorizontal/>
                    </button>
                </div>
        )
    }
    return(
        <div className="main_section_container">
            <div className="main_section_brand_name">
                <h1>Music</h1>
            </div>
            <div className="main_section_header">
                <div className="header_first">
                    <button>
                        <RiGalleryView2/>
                        <span>Gallery</span>
                    </button>
                </div>
                <Editors/>
                <div className="extra_tool_container">
                    <div className="extra_tool">
                        <button><AiOutlineShrink/></button>
                        <button><HiOutlineDotsHorizontal /></button>
                    </div>
                </div>
            </div>
            <div className="main_section_item">
                <div className="box">
                    <div className="box-image-div"><img src="/hero6.png"/></div>
                    <div className="box_content">
                        <div className=""></div>
                    </div>
                </div>
                <div className="box">
                <img src="/hero2.png"/>
                    <div className="box_content">
                    </div>
                </div>
                <div className="box">
                <img src="/hero4.png"/>
                    <div className="box_content">
                    </div>
                </div>
                <div className="box">
                <img src="/hero7.png"/>
                    <div className="box_content">
                    </div>
                </div>
            </div>
            <div className="second_main_section">
                <h1>Music Trending</h1>
                <div className="item_header_tool">
                    <div className="header_div">
                        <button onClick={()=>changeActive(0)} className={`${active === 0?'active':''} active_item `}>Top 10</button>
                        <button onClick={()=>changeActive(1)} className={`${active === 1?'active':''} active_item`}>Popular</button>
                        <button onClick={()=>changeActive(2)} className={`${active === 2?'active':''} active_item`}>Hot</button>
                        <button onClick={()=>changeActive(3)} className={`${active === 3?'active':''} active_item`}>All</button>
                        <button className="main_section_2more">..2more</button>
                        <button className="main_section_1more">..1more</button>
                    </div>
                    <Editors/>
                    <div className="extra_tool_container">
                        <div className="extra_tool">
                            <button><AiOutlineShrink/></button>
                            <button><HiOutlineDotsHorizontal />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="main_section_item_table">
                    <h1>{year} {month} {day}</h1>
                </div>
            </div>
        </div>
    )
}