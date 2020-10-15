import React from 'react';
import { connect } from 'react-redux';

import { conversationChanged } from '../../actions';
import ChatHeader from '../../components/chat-title/ChatHeader';
import MessageList from '../../components/message/MessageList';
import ChatForm from '../../components/chat-form/Chat-Form';
import './ChatContainer.css';

const ChatContainer = (
    {   
        selectedConversation,   
    }) => {
    return (
        <div id="chat-container">
            <ChatHeader selectedConversation={selectedConversation} />
            <MessageList messages={selectedConversation.messages} />
            <ChatForm />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        conversations: state.conversationState.conversations,
        selectedConversation: state.conversationState.selectedConversation
    };
};
  
// const mapDispatchToProps = dispatch => ({
//     conversationChanged: conversationId => dispatch(conversationChanged(conversationId))
// });

export default connect(
    mapStateToProps,
    
)(ChatContainer);