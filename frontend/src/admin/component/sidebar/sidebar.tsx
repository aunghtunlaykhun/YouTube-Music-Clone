import { IoMdAdd } from 'react-icons/io';
import './sidebar.css';
import { IoAlbumsOutline } from 'react-icons/io5';
import { GoPerson } from 'react-icons/go';
import { RiInboxArchiveLine } from 'react-icons/ri';
import { PiSubtitles } from 'react-icons/pi';
import { TbCategoryPlus } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

export const AdminSidebar = ()=>{
    const navigate = useNavigate();
    const gotoPosts = ()=>{
        navigate('/posts');
    }   
    return(
        <div className="sidebar_container">
            <div className="sidebar_content">
                <div className="sidebar_first_content">
                    <div className="sidebar_function">
                        <div className="function_header">
                            <h1>Music Function</h1>
                            <div className="line"></div>
                        </div>
                        <div className="function_button">
                            <button onClick={gotoPosts}>
                                <IoMdAdd/>
                                <span className="function_label">Add New Song</span>
                            </button>
                        </div>

                        <div className="function_button">
                            <button>
                                <IoAlbumsOutline/>
                                <span  className="function_label">Add New Album</span>
                            </button>
                        </div>

                        <div className="function_button">
                            <button>
                                <GoPerson/>
                                <span className="function_label">Add New Artist</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="sidebar_second_content">
                    <div className="navigation_header">
                        <h1>Navigation</h1>
                        <div className="line"></div>
                    </div>
                    <div className="navigation_function">
                        <button>
                            <RiInboxArchiveLine/>
                            <span className="function_label">Inbox</span>
                        </button>
                    </div>

                    <div className="navigation_function">
                        <button>
                            <PiSubtitles/>
                            <span className="function_label">Title</span>
                        </button>
                    </div>

                    <div className="navigation_function">
                        <button>
                            <TbCategoryPlus/>
                            <span className="function_label">Category</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}