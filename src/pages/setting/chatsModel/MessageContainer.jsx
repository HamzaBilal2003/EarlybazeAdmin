import React from 'react';
import MessageItem from './MessageItem';

const MessageContainer = ({ messages }) => {
    return (
        <div className="h-[400px] overflow-y-auto">
            {messages.map((msg, index) => (
                <MessageItem key={index} message={msg} sender={msg.sender} />
            ))}
        </div>
    );
};

export default MessageContainer;
