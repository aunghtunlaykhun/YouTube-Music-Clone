import { RxDashboard } from 'react-icons/rx';
import './dashboard.css';
import { IoMdSearch } from 'react-icons/io';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { AdminSidebar } from '../sidebar/sidebar';
import { MainSection } from '../mainsection/mainsection';
import { Minibar } from '../minibar/minibar';

const Dashboard = ()=>{
    return(
        <div className="dashboard_container">
            <div className="dashboard_nav_container">
                <div className="dashboard_nav1">
                    <RxDashboard/>
                    <h1>Music Dashboard</h1>
                </div>
                <div className="dashboard_nav2">
                    <button className="">
                        <IoMdSearch/>
                    </button>
                    <button>
                        <HiOutlineDotsHorizontal/>
                    </button>
                </div>
            </div>
            <div className="dashboard_content_container">
                <div className="blank_space"></div>
                <div className="dashboard_title">
                    <img src="/music_logo2.png" />
                    <h1>Music Dashboard</h1>
                </div>
                <div className="dashboard_section">
                    <div className="sidebar_container_div">
                        <AdminSidebar/>
                    </div>
                    <div className="div_interval"></div>
                    <div className="main_section_container_div">
                        <MainSection/>
                    </div>
                </div>
                <div className="minibar_container">
                    <Minibar/>
                </div>
            </div>
            {/* minibar */}
            
        </div>
    )
}

export default Dashboard;