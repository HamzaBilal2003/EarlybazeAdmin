import React from 'react';

const MessageItem = ({ message, sender }) => {
    return (
        <div className={`mb-8 flex items-start gap-2 ${sender === 'user' ? 'justify-start flex-row-reverse' : 'justify-start'}`}>
            <img 
                src={message.img ? message.img : `https://randomuser.me/api/portraits/${sender === 'user' ? 'men' : 'women'}/44.jpg`} 
                alt="" 
                className='h-6 w-6 rounded-full' 
            />
            <div 
                className={`p-3 rounded-b-lg text-white max-w-xs break-words overflow-hidden ${sender === 'user' ? 'bg-[#156446] rounded-l-lg' : 'bg-[#25AE7A] rounded-r-lg'}`}
                style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}
            >
                <p className="text-sm break-words">{message.text}</p>
            </div>
        </div>
    );
};

export default MessageItem;
