import { Link, useNavigate } from 'react-router-dom';
import './explore.css';
import { BsMusicNote } from 'react-icons/bs';
import { IoMdTrendingUp } from 'react-icons/io';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdMood } from 'react-icons/md';
import { Moods } from '../../data/data';

const Explore = ()=>{
    const navigate = useNavigate();
    const gotoNewRelease = ()=>{
        navigate('/release');
    }
    return(
        <div className="explore_container">
            <div className="explore_subContainer">
                <div className="explore_title">
                   <button className="newRelease" onClick={gotoNewRelease}>
                        <BsMusicNote/>
                        <p>New Release</p>
                   </button>
                   <button className="chart" onClick={gotoNewRelease}>
                    <IoMdTrendingUp/>
                        <p>Chart</p>
                   </button>
                   <button className="mood" onClick={gotoNewRelease}>
                        <MdMood/>
                        <p>Mood & genres</p>
                   </button>
                </div>

                <div className="newAlbum">
                    <div className="title">
                        <h2>New Album & singles</h2>
                        <div className="go-func">
                            <button className="more">More</button>
                            <button><MdKeyboardArrowLeft/></button>
                            <button><MdKeyboardArrowRight/></button>
                        </div>
                    </div>
                    <div className="newAlbum_content_container">
                        <div className="newAlbum_content_items">
                            <div className="item">
                                <img src="/song5.png" />
                                <div className="info">
                                    <h4>Requiem</h4>
                                    <p>Album.Keshi</p>
                                </div>
                            </div>

                            <div className="item">
                                <img src="/song5.png" />
                                <div className="info">
                                    <h4>Requiem</h4>
                                    <p>Album.Keshi</p>
                                </div>
                            </div>

                            <div className="item">
                                <img src="/song5.png" />
                                <div className="info">
                                    <h4>Requiem</h4>
                                    <p>Album.Keshi</p>
                                </div>
                            </div>

                            <div className="item">
                                <img src="/song5.png" />
                                <div className="info">
                                    <h4>Requiem</h4>
                                    <p>Album.Keshi</p>
                                </div>
                            </div>

                            <div className="item">
                                <img src="/song5.png" />
                                <div className="info">
                                    <h4>Requiem</h4>
                                    <p>Album.Keshi</p>
                                </div>
                            </div>

                            <div className="item">
                                <img src="/song5.png" />
                                <div className="info">
                                    <h4>Requiem</h4>
                                    <p>Album.Keshi</p>
                                </div>
                            </div>

                            <div className="item">
                                <img src="/song5.png" />
                                <div className="info">
                                    <h4>Requiem</h4>
                                    <p>Album.Keshi</p>
                                </div>
                            </div>

                            <div className="item">
                                <img src="/song5.png" />
                                <div className="info">
                                    <h4>Requiem</h4>
                                    <p>Album.Keshi</p>
                                </div>
                            </div>

                            <div className="item">
                                <img src="/song5.png" />
                                <div className="info">
                                    <h4>Requiem</h4>
                                    <p>Album.Keshi</p>
                                </div>
                            </div>

                            <div className="item">
                                <img src="/song5.png" />
                                <div className="info">
                                    <h4>Requiem</h4>
                                    <p>Album.Keshi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mood_container">
                    <div className="title">
                            <h2>Mood & genres</h2>
                            <div className="go-func">
                                <button className="more">More</button>
                                <button><MdKeyboardArrowLeft/></button>
                                <button><MdKeyboardArrowRight/></button>
                            </div>
                    </div>

                    <div className="mood_content_container">
                        <div className="mood_content_items">
                            {
                                Moods.map((item,index)=>(
                                    <div className="items-row" key={index}>
                                        {
                                            item.map((i,index)=>(
                                                <button className="item" key={index+i}>{i}</button>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Explore;