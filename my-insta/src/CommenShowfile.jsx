import React from 'react'
import "./CommenShowfile.css";
import SideNav from "./Navigation/SideNav"
import TimeLine from "./Timeline/TimeLine"
import Homepage from './Pages/Homepage';

const CommenShowfile = () => {
    return (
        <div className='homepage'>
            <div className="homepage_nav">
                <Homepage />
            </div>
            <div className="homepage_timeline">
                <TimeLine />
            </div>
        </div>
    )
}

export default CommenShowfile