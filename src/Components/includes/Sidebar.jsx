import React from 'react';
import {NavLink} from "react-router-dom";

function Sidebar() {
    return(
        <div className='sidebar'>
            <div className='pr-name'>
                React
            </div>
            <nav>
                <ul>
                    <li><NavLink exact to='/'>Main</NavLink></li>
                    <li><NavLink to='/settings'>Settings</NavLink></li>
                    <li><NavLink to='/messages'>Messages</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}
export default Sidebar;