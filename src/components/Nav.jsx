import { useState } from "react";

const Nav = () => {
    
    const [btn, setBtn] = useState(false);

    const btnclick = () => {
        if(!btn) setBtn(true);
        else setBtn(false);
    }

    return (
        <>
            <div className="nav-btn" style={{left: !btn ? "10px" : "30%", borderRadius: !btn ? "10px" : "0 10px 10px 0"}} onClick={btnclick}>
                <div className="bar" style={{transform: !btn ? "" : "translate(0, 11px) rotate(-45deg)"}}></div>
                <div className="bar" style={{opacity: !btn ? "" : "0"}}></div>
                <div className="bar" style={{transform: !btn ? "" : "translate(0, -9px) rotate(45deg)"}}></div>
            </div>
            <div className="nav" style={{width: !btn ? "0%" : "30%", boxShadow: !btn ? "none" : "rgb(0,0,0) 0px 0px 0px 2px"}}></div>
        </>
    )
}

export default Nav