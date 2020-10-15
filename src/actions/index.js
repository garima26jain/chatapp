export const conversationChanged = conversationId => ({
    type: 'ACTIVE_CONVERSATION_CHANGED',
    conversationId
});

export const newMessageAdded = textMessage => ({
    type: 'NEW_USER_MESSAGE',
    textMessage
});