import { ButtonHTMLAttributes, CSSProperties, useEffect, useRef, useState} from "react"
import { Link } from "react-router-dom";
import './authentication.css';

export const Authentication = ()=>{

    const itemRef = useRef<HTMLDivElement[]>([]);
    const [currentIndex,setCurrentIndex] = useState(0);
    const [activeIndex,setActiveIndex] = useState(0);
    const [lastposition,setLastposition] = useState(0);
    const [listActive,setListActive] = useState(0);
    const [effect,setEffect] = useState('');
    const addItemRef = (el:HTMLDivElement)=>{
        if(itemRef && !itemRef.current.includes(el)){
            itemRef.current.push(el);
        }
    }
    useEffect(()=>{
        const lp = itemRef.current.length - 1;
        setLastposition(lp);
    },[])
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setEffect('');
        },1500)
        return ()=>clearTimeout(timer);
    },[currentIndex]);
    const goBack = ()=>{
        let newValue = currentIndex - 1 < 0 ? lastposition : currentIndex - 1 ;
        setCurrentIndex(newValue);
        setActiveIndex(newValue);
        setListActive(newValue);
        setEffect('effect');
    }
    const goNext = ()=>{
        let newValue = currentIndex + 1 > lastposition  ? 0 : currentIndex + 1;
        setCurrentIndex(newValue);
        setActiveIndex(newValue);
        setListActive(newValue);
        setEffect('effect');
    }
   useEffect(()=>{
    const interval = setInterval(()=>{
        goNext();
    },5000);
    return ()=>clearInterval(interval);
   },[currentIndex,lastposition]);

    return(
        <div className={` auth_slider_container ${effect}`}>
            <div className="auth_slider_list">
                <div ref={addItemRef} className={`auth_slider_item ${activeIndex === 0 ? 'active':''}`} data-content="LEMON" style={{'--bg-color':'#428372','--image-url':'url(/hero5.png)'} as CSSProperties}>
                    <div className="auth_content">
                        <div className="auth_image"></div>
                        <div className="auth_info">
                            <div className="auth_title">
                                Fuji Soda
                            </div>
                            <div className="auth_category">
                                Soda
                            </div>
                            <div className="auth_description">
                                aadi osdif  iow ef os dfi sdof  osd fis df sod fosdfs fs fo sdof so f sdf sfewiw qp wf oefw woiw f wf wfow f wfi wef wefwf wefwof iwef wef wef wefew few f ewf wef ewf ewf ew ifw efwe few fwe f wef wef  fe few f wefwefi wf wf ef ei few fwef e fwe fe wf e fef ef ewf we f ewf e few f ewf  f ew fweif wef wefireogerogergerg ge g rg erg p ger pg r greg pwer epg rw 
                            </div>
                        </div>
                    </div>
                </div>

                <div ref={addItemRef} className={`auth_slider_item ${activeIndex === 1 ? 'active':''}`} data-content="ORANGE" style={{'--bg-color':'#e86c3f','--image-url':'url(/song3.png)',} as CSSProperties}>
                    <div className="auth_content">
                        <div className="auth_image"></div>
                        <div className="auth_info">
                            <div className="auth_title">
                                Fuji Soda
                            </div>
                            <div className="auth_category">
                                Soda
                            </div>
                            <div className="auth_description">
                                aadi osdif  iow ef os dfi sdof  osd fis df sod fosdfs fs fo sdof so f sdf sfewiw qp wf oefw woiw f wf wfow f wfi wef wefwf wefwof iwef wef wef wefew few f ewf wef ewf ewf ew ifw efwe few fwe f wef wef  fe few f wefwefi wf wf ef ei few fwef e fwe fe wf e fef ef ewf we f ewf e few f ewf  f ew fweif wef wefireogerogergerg ge g rg erg p ger pg r greg pwer epg rw 
                            </div>
                        </div>
                    </div>
                </div>

                <div ref={addItemRef} className={`auth_slider_item ${activeIndex === 2 ? 'active':''}`} data-content="Apple" style={{'--bg-color':'#EEAA19','--image-url':'url(/artist4.png)',} as CSSProperties}>
                    <div className="auth_content">
                        <div className="auth_image"></div>
                        <div className="auth_info">
                            <div className="auth_title">
                                Fuji Soda
                            </div>
                            <div className="auth_category">
                                Soda
                            </div>
                            <div className="auth_description">
                                aadi osdif  iow ef os dfi sdof  osd fis df sod fosdfs fs fo sdof so f sdf sfewiw qp wf oefw woiw f wf wfow f wfi wef wefwf wefwof iwef wef wef wefew few f ewf wef ewf ewf ew ifw efwe few fwe f wef wef  fe few f wefwefi wf wf ef ei few fwef e fwe fe wf e fef ef ewf we f ewf e few f ewf  f ew fweif wef wefireogerogergerg ge g rg erg p ger pg r greg pwer epg rw 
                            </div>
                        </div>
                    </div>
                </div>

                <div className="auth_arrow">
                    <button className="auth_prev" onClick={goBack} >Prev</button>
                    <button className="auth_next" onClick={goNext} >Next</button>
                </div>

                <ul className="auth_dot">
                    <li className={`${listActive === 0?'active':''}`}></li>
                    <li className={`${listActive === 1?'active':''}`}></li>
                    <li className={`${listActive === 2?'active':''}`}></li>
                </ul>

            </div>
        </div>
    )
}