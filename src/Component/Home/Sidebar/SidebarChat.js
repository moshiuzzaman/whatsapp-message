import { Avatar } from '@material-ui/core';
import React from 'react';

const SidebarChat = () => {
    return ( 
        <div className="sidebarChat">
            <Avatar/>
            <div className="sidebarChat_info">
                <h2>Man name</h2>
                <p>this is the last message</p>
            </div>
        </div>
    );
};

export default SidebarChat;