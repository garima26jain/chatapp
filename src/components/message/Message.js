import React from 'react';
import classNames from 'classnames';

import './Message.css';

const Message = ({ isMyMessage, message }) => {
    const messageClass = classNames('message-row', {
        'you-message': isMyMessage,
        'other-message': !isMyMessage
    });
    
    const imageThumbnail = 
        isMyMessage ? null : <img src={message.imgUrl} alt={message.imgalt} />;

    return (
        <div className={messageClass}>
            <div className="message-content">
                {imageThumbnail}
                <div className="message-text">
                    {message.messageText}
                </div>
                <div className="message-time">{message.createdAt}</div>
            </div>
        </div>
    );
}

export default Message;