
import React from 'react';
import Chat from '../Chat/Chat';
import Sidebar from '../Sidebar/Sidebar';
import './Home.css'

const Home = () => {
    return (
        <div className="app_body">
            <Sidebar></Sidebar>
            <Chat/>
        </div>
    );
};

export default Home;