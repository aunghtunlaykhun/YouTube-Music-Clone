import { BsPersonVideo } from 'react-icons/bs';
import './profile.css';
import { PiYoutubeLogoLight } from 'react-icons/pi';
import { MdHelpOutline, MdOutlineHistory, MdOutlineLogout, MdPolicy, MdSwitchAccount } from 'react-icons/md';
import { IoMdCloudUpload } from 'react-icons/io';
import { LuSettings } from 'react-icons/lu';
import { RiFeedbackLine } from 'react-icons/ri';

export const Profile = ()=>{
    return(
        <div className="profile_subContainer">
           <div className="profile_content">
                <div className="profile_header">
                    <div className="profile_img">
                        <img src="/music_logo2.png" />
                    </div>
                    <div className="">
                    <div className="profile_name">
                        <p>Khun Aung Htun Lay</p>
                    </div>
                    <button className="profile_setting">
                        <p>Manage Account</p>
                    </button>
                    </div>
                </div>
                <div className="profile_features">
                    <button>
                        <BsPersonVideo/>
                        <p>Your channel</p>
                    </button>
                    <button>
                        <PiYoutubeLogoLight/>
                        <p>Get Music Premium</p>
                    </button>
                    <button>
                        <MdSwitchAccount/>
                        <p>Switch Account</p>
                    </button>
                    <button>
                        <MdOutlineLogout/>
                        <p>Sign Out</p>
                    </button>
                    <div className="border-line"></div>
                    <button>
                        <IoMdCloudUpload/>
                        <p>Upload Music</p>
                    </button>
                    <button>
                        <MdOutlineHistory/>
                        <p>History</p>
                    </button>
                    <button>
                        <LuSettings/>
                        <p>Setting</p>
                    </button>
                    <button>
                        <MdPolicy/>
                        <p>Terms & privacy policy</p>
                    </button>
                    <button>
                        <MdHelpOutline/>
                        <p>Help</p>
                    </button>
                    <button>
                        <RiFeedbackLine/>
                        <p>Send feedback</p>
                    </button>
                </div>
           </div>
        </div>
    )
}