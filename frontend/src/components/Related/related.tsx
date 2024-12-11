import { PiListPlusLight } from 'react-icons/pi';
import { musicType } from '../../data/data';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../ReduxState/store';
import { DataType } from '../../helper/function';

type relateProps = {
    relatedData:Array<DataType>
}

export const Related = React.memo(({relatedData}:relateProps)=>{
    const RelatedFeatures = ()=>{
        return(
            <div className={`related_features`}>
                <button>up next</button>
                <button>lyrics</button>
                <button>related</button>
            </div>
        )
    }
    const {currentPlayingUrl,globalSongs} = useSelector((state:RootState)=>state.songs);

    console.log(globalSongs);

    console.log('re-render in Related');
    return(
        <div className="related_container">
                    <RelatedFeatures/>
                    <div className="related_content">
                    <div className="playing_from">
                        <div className="div1">
                            <p>Playing from</p>
                            <h4>Creep - Radio Head</h4>
                        </div>
                        <button>
                            <PiListPlusLight/>
                            <p>Save</p>
                        </button>
                    </div>

                    <div className="auto_play">
                        <div className="div1">
                            <h4>Autoplay</h4>
                            <p>Add similar content to the end of queue</p>
                        </div>
                        <label className="autoplay_btn" htmlFor="autoplay_check">
                        <input type="checkbox" id="autoplay_check" />
                            <div className="circle"></div>
                        </label>
                    </div>

                    <div className="playing">
                        <div className="div1">
                            {
                                currentPlayingUrl && 
                                <img src={currentPlayingUrl.image as string} />
                            }
                            <div>
                                <h5>{currentPlayingUrl.songName}[Explicit]</h5>
                                <p>{currentPlayingUrl.artist?.toUpperCase()}</p>
                            </div>
                        </div>
                        <button>3:57</button>
                    </div>
                    <h4 className="autoplay-is-on">Autoplay is on</h4>

                    <div className="music_type_container">
                        <div className="music_type_items">
                            {
                                musicType.map((item)=>(
                                    <button key={item}>{item}</button>
                                ))
                            }
                        </div>
                    </div>
                    { relatedData &&
                       relatedData.map((item:DataType,index:number)=>(
                            <div className="playing" key={'slidi'+index}>
                        <div className="div1">
                            <img src={item.image} />
                            <div>
                                <h5>{item.songName} [Explicit]</h5>
                                <p>{item.artist}</p>
                            </div>
                        </div>
                        <button>3:57</button>
                    </div>
                        ))
                    }
                    </div>
                </div>
    )
})

