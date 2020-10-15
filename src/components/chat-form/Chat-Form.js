import React,{useState} from 'react';
import SendIcon from '@material-ui/icons/Send';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import './Chat-Form.css';

function ChatForm() {
    const [textMessage, setTextMessage] = useState('');
    
    const handleClick = () => {
        console.log(textMessage);  
    };



    return (
        <div id="chat-form">
            {/* <img src={require("../../images/icons/attachment-logo.svg")} alt="Add Attachment" /> */}
            <CameraAltIcon style={{ fontSize: 30 ,color:'white', marginRight:20}}/>
            <input onChange={(e)=>(setTextMessage(e.target.value))} type="text" placeholder="type a message" />
            <SendIcon onClick={()=>handleClick()} style={{ fontSize: 30 ,color:'white',marginLeft:20 }}/>
        </div> 
    );
}

export default ChatForm;