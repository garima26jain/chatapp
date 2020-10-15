import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import InfoIcon from '@material-ui/icons/Info';
import VideocamIcon from '@material-ui/icons/Videocam';
import './ChatHeader.css';

const ChatHeader = ({ selectedConversation }) => {
    return (
        <div id="chat-title"  style={{
            display: 'flex',
            alignItems: 'center'
        }}>
            <span>{selectedConversation.title}</span>
            <div className="title-icons">
            <PhoneIcon className="iconStyle" />
            <VideocamIcon className="iconStyle" />
            <InfoIcon className="iconStyle" />
            {/* <img src={require("../../images/icons/trash-logo.svg")} alt="Delete Conversation" /> */}
            </div>
        </div>
    );
}

export default ChatHeader;