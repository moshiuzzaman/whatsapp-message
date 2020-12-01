import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
import React from 'react';
import './Chat.css'

const Chat = () => {
    return (
        <div className='chat'>
            <div className='chat_header'>
                <Avatar />

                <div className='chat_headerInfo'>
                    <h3>Room Name</h3>
                    <p>Lats seen at ....</p>
                </div>

                <div className='chat_header_right'>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>

                    <IconButton>
                        <AttachFile />
                    </IconButton>

                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className='chat__body'>
                <p className='chat__massage'>

                    <span className='chat__name'>sunny</span>
                    <span className='chat__timestamp'>
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className='chat__massage chat__reciever'>

                    <span className='chat__name'>sunny</span>
                    <span className='chat__timestamp'>
                        {new Date().toUTCString()}
                    </span>
                </p>
            </div>


            {/*======================================================= Chat Footer */}
            <div className='chat__footer'>
                <InsertEmoticon />
                <form>
                    <input placeholder='Type a message' type='text' />
                    <button>Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    );
};

export default Chat;