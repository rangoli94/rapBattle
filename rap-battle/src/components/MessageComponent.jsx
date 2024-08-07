import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

function MessageComponent({ isOwnMessage, text }) {
    return (
        <div className={`flex items-start ${isOwnMessage ? 'justify-start' : 'justify-end'}`}>
            <div className={`max-w-xs p-6 m-2 rounded-lg ${isOwnMessage ? 'bg-gold' : 'bg-silver'}`}>
                <div className='flex mb-2 justify-between'>
                    <div className='flex'>
                        <Avatar className='w-7 h-7 mr-2'>
                            <AvatarImage src='https://github.com/shadcn.png' alt='User Avatar' />
                            <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                        <p className="font-semibold">Char 1</p>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>

                </div>

                <p className="break-words">
                    {text}
                </p>
            </div>
        </div>
    );
}

export default MessageComponent;
