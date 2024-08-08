import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Textarea } from "./ui/textarea"
import { Button } from './ui/button';
import useAxios from '../customHooks/useAxios.hook';
import Loader from './ui/loader';
import { Badge } from "./ui/badge"



function MessageComponent({ isChar1Message, text, char, idx, editContent }) {
    const [editableContent, setEditableContent] = useState(text)
    const [isEditting, setIsEditting] = useState(false)
    const { error, isLoading, fetchData } = useAxios()
    const [audio, setAudio] = useState()

    const convertTextToSpeech = () => {
        fetchData(setAudio, text)
    }

    const cancelEditting = () => {
        setIsEditting(false)
        setEditableContent(text)
    }

    const submitEditting = () => {
        setIsEditting(false)
        editContent(idx, editableContent)
    }

    return (
        <div className={`flex items-start ${isChar1Message ? 'justify-start' : 'justify-end'}`}>
            <div className={`w-full max-w-xs p-6 m-2 rounded-lg ${isChar1Message ? 'bg-gold' : 'bg-silver'}`}>
                <div className='flex mb-2 justify-between'>
                    <div className='flex'>
                        <Avatar className='w-7 h-7 mr-2'>
                            <AvatarImage src={char.img} alt='User Avatar' />
                            <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                        <p className="font-semibold">{char.name}</p>
                    </div>

                    <button onClick={() => setIsEditting(true)} className="focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                    </button>


                </div>
                {
                    isEditting ?
                        <div className='mt-2'>
                            <Textarea value={editableContent} onChange={(e) => setEditableContent(e.target.value)} />
                            <div className="flex justify-center space-x-4 mt-4">
                                <Button variant="selectChar" onClick={submitEditting}>Submit</Button>
                                <Button variant="selectChar" onClick={cancelEditting}>Cancel</Button>
                            </div>
                        </div>
                        :
                        <>
                            <div className="break-words">
                                {text}
                                {
                                    isLoading ? <span className='inline-flex relative top-2 left-2'><Loader /> </span> :
                                        <button className='relative top-2 left-2' onClick={convertTextToSpeech}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                                            </svg>
                                        </button>

                                }
                                {
                                    error &&
                                    <div className='mt-2'><Badge variant="destructive">{error}</Badge></div>
                                }

                            </div>
                        </>

                }

            </div>
        </div>
    );
}

export default MessageComponent;
