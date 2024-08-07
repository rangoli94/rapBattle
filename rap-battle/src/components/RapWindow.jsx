import React from 'react'
import MessageComponent from './MessageComponent'

function RapWindow() {
    return (
        <div className='bg-lightBlue m-4 rounded-lg p-5'>
            
            <div className='w-full flex justify-between'>
                <h1 className='font-semibold'>Let the Battle Begin....</h1>
            </div>
            <div className='w-[60%] mx-auto'>
                <MessageComponent isOwnMessage={true}    text="elf-made? Please, with daddy's cash,I worked my way up, no need to bash,
          You say economy, but left us in a mess,
          I’m cleaning up your chaos, while you digress."/>
                <MessageComponent isOwnMessage={false}   text="elf-made? Please, with daddy's cash,I worked my way up, no need to bash,
          You say economy, but left us in a mess,
          I’m cleaning up your chaos, while you digress." />
                <MessageComponent isOwnMessage={true}    text="elf-made? Please, with daddy's cash,I worked my way up, no need to bash,
          You say economy, but left us in a mess,
          I’m cleaning up your chaos, while you digress."/>
                <MessageComponent isOwnMessage={false}   text="elf-made? Please, with daddy's cash,I worked my way up, no need to bash,
          You say economy, but left us in a mess,
          I’m cleaning up your chaos, while you digress." />
                <MessageComponent isOwnMessage={true}    text="elf-made? Please, with daddy's cash,I worked my way up, no need to bash,
          You say economy, but left us in a mess,
          I’m cleaning up your chaos, while you digress."/>
                <MessageComponent isOwnMessage={false}   text="elf-made? Please, with daddy's cash,I worked my way up, no need to bash,
          You say economy, but left us in a mess,
          I’m cleaning up your chaos, while you digress." />
                <MessageComponent isOwnMessage={true}    text="elf-made? Please, with daddy's cash,I worked my way up, no need to bash,
          You say economy, but left us in a mess,
          I’m cleaning up your chaos, while you digress."/>
                <MessageComponent isOwnMessage={false}   text="elf-made? Please, with daddy's cash,I worked my way up, no need to bash,
          You say economy, but left us in a mess,
          I’m cleaning up your chaos, while you digress." />
                <MessageComponent isOwnMessage={true}    text="elf-made? Please, with daddy's cash,I worked my way up, no need to bash,
          You say economy, but left us in a mess,
          I’m cleaning up your chaos, while you digress."/>
                <MessageComponent isOwnMessage={false}   text="elf-made? Please, with daddy's cash,I worked my way up, no need to bash,
          You say economy, but left us in a mess,
          I’m cleaning up your chaos, while you digress." />
            </div>  
        </div>
      )
}

export default RapWindow