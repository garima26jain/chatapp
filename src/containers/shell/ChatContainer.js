import React,{useState} from 'react';
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
    const [show,setShow]= useState(false);
    return (
        <>
        {show?
        <div id="chat-container">
           <div style={{display:"contents"}} onClick={()=>setShow(false)}> <ChatHeader selectedConversation={selectedConversation} /></div>
            <MessageList messages={selectedConversation.messages} />
            <ChatForm />
        </div>:
        <div className="chat-banner" onClick={()=>{setShow(true)}} id="chat-banner">
           <span class="banner-name"> {selectedConversation.title}</span>
        </div>
        }
        
        
        </>
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