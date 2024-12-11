import './minibar.css';

export const Minibar = ()=>{
    return(
        <div className="mini_bar">
            <div className="mini_bar_content">
                <div className="empty_div"></div>
                <div className="minibar_items_container">
                    <div className="minibar_items">
                        <div className="child_item active"></div>
                        <div className="child_item"></div>
                        <div className="child_item"></div>
                        <div className="child_item"></div>
                        <div className="child_item"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}