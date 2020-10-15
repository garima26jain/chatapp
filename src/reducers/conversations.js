const initialState = {
    conversations: [
        {
            id: '1', 
            imgUrl: require('../images/profiles/sarah.jpeg'),
            imgalt: 'Sanya',
            title: 'Sanya',
            createdAt: 'Oct 13',
            latestMessageText: 'Ok fair enough. Well good talking to you.',
            messages: [
                {
                    imgUrl: null,
                    imgalt: null,
                    messageText: 'Ok fair enough. Well good talking to you.',
                    createdAt: 'Oct 20',
                    isMyMessage: true
                },
                {
                    imgUrl: require('../images/profiles/sarah.jpeg'),
                    imgalt: 'Sanya',
                    messageText: `
                        Not sure exactly yet. It will be next month sometime. Probably early.
                    `,
                    createdAt: 'Oct 20',
                    isMyMessage: false
                },
                {
                    imgUrl: null,
                    imgalt: null,
                    messageText: 'Yeah I know. But , when is the big date?',
                    createdAt: 'Oct 19',
                    isMyMessage: true
                },
                {
                    imgUrl: require('../images/profiles/sarah.jpeg'),
                    imgalt: 'Sanya',
                    messageText: `
                        lets have a fun weekend .Wouldn't it be great if you ,me all our friends could 
                        catch up after so long!
                    `,
                    createdAt: 'Oct 19',
                    isMyMessage: false
                },
                {
                    imgUrl: null,
                    imgalt: null,
                    messageText: `
                        Yeah that would be great!.
                    `,
                    createdAt: 'Oct 19',
                    isMyMessage: true
                },
                {
                    imgUrl: require('../images/profiles/sarah.jpeg'),
                    imgalt: 'Sanya',
                    messageText: `
                        I've just been really busy at work myself,up for a short break or vacation?
                    `,
                    createdAt: 'Oct 19',
                    isMyMessage: false
                },
                {
                    imgUrl: null,
                    imgalt: null,
                    messageText: 'Yes it has been a little while',
                    createdAt: 'Oct 19',
                    isMyMessage: true
                },
                {
                    imgUrl: require('../images/profiles/sarah.jpeg'),
                    imgalt: 'Sanya',
                    messageText: 'Hey!!!! Have not spoken to you for a while',
                    createdAt: 'Oct 19',
                    isMyMessage: false
                },
                {
                    imgUrl: null,
                    imgalt: null,
                    messageText: 'Hi Sanya?',
                    createdAt: 'Oct 19',
                    isMyMessage: true
                }
            ]
        }
    ],
    selectedConversation: {}
};

initialState.selectedConversation = initialState.conversations[0];

const conversationsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ACTIVE_CONVERSATION_CHANGED': {
        const newState = { ...state };
        newState.selectedConversation = 
            newState.conversations.find(
                conversation => conversation.id === action.conversationId
            );

        return newState;
      }
      case 'NEW_USER_MESSAGE': {
        if (state.selectedConversation) {
          const newState = { ...state };
          newState.selectedConversation = { ...newState.selectedConversation };
          
          newState.selectedConversation.messages.unshift(
              {
                  imgUrl: null,
                  imgalt: null,
                  messageText: action.textMessage,
                  createdAt: 'Apr 16',
                  isMyMessage: true
              },
          )
  
          return newState;
        }

        return state;
    }
      default:
        return state;
    }
  }
  
export default conversationsReducer;