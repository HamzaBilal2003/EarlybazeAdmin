import React, { useState } from 'react';
import MessageContainer from './MessageContainer';
import MessageInput from './MessageInput';
import Overlay from '../../../globalComponents/Overlay';

const ChatApp = ({ ticket, assignedAgent, closeModal }) => {
    const [messages, setMessages] = useState([
        { text: `Hello, I am ${assignedAgent}. How can I assist you?`, sender: 'agent' },
    ]);

    const handleSend = (newMessage) => {
        setMessages([...messages, { text: newMessage, sender: 'user' }]);
        setTimeout(() => {
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: `Thanks for reaching out. I'll check your ticket #${ticket.ticket}.`, sender: 'agent' }
            ]);
        }, 1000);
    };

    return (
        <Overlay>
            <div className="absolute right-10 top-1 mx-auto bg-theme-dark p-4 rounded-md shadow-md mt-8 w-[30%]">
                <div className='flex items-center gap-4 justify-center relative mb-8 mt-4'>
                    <h2 className='text-xl font-bold text-white'>ticket {ticket.ticket}</h2>
                    <button
                        className='absolute top-1/2 -translate-y-1/2 right-0 text-white text-lg'
                        onClick={closeModal}
                    >
                        <i className="bi bi-x-circle"></i>
                    </button>
                </div>
                <MessageContainer messages={messages} />
                <MessageInput onSend={handleSend} />
            </div>
        </Overlay>
    );
};

export default ChatApp;
