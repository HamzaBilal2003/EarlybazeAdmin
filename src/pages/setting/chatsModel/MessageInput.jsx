import React, { useState, useRef } from 'react';

const MessageInput = ({ onSend }) => {
    const [message, setMessage] = useState('');
    const textareaRef = useRef(null);

    const handleInput = (e) => {
        setMessage(e.target.value);
        
        // Auto-adjust textarea height
        textareaRef.current.style.height = '50px';  // Reset height first to handle shrink
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim()) {
            onSend(message);
            setMessage('');
            textareaRef.current.style.height = '50px';  // Reset height after sending
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-4 rounded-md bg-[#042619] focus-within:border focus-within:border-[#25AE7A] text-white w-full">
            <textarea
                ref={textareaRef}
                value={message}
                onChange={handleInput}
                placeholder="Type your message..."
                className="p-2 rounded-md bg-[#042619] text-white w-full outline-none resize-none overflow-hidden"
                rows="1"
                style={{ height: 'auto', maxHeight: '200px' }}
            />
            <button
                type="submit"
                className="px-6 py-3 rounded-md font-bold outline-none transform rotate-[45deg] text-white"
            >
                <i className="bi bi-send"></i>
            </button>
        </form>
    );
};

export default MessageInput;
