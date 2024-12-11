import './extra.css';
import { Extra as ExtraData } from '../../data/data';

export const Extra = ()=>{
    return(
        <div className="extra_subContainer">
            {
                ExtraData.map((item)=>(
                    <button className="extra-func-btn">
                        <div className="icon">{item.icon}</div>
                        <p className="title">{item.title}</p>
                    </button>
                ))
            }
        </div>
    )
}