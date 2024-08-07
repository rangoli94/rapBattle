import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';

function CharacterCard() {
  return (
    <div className='bg-white p-2 rounded-lg shadow-md text-center w-[10rem]'>
      <h5 className='mb-4 font-semibold'>Username</h5>
      <Avatar className='w-20 h-20 mx-auto mb-4 border border-gray-300 rounded-full'>
        <AvatarImage src='https://github.com/shadcn.png' alt='User Avatar' />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
      <Button variant='selectChar' className='w-full'>
        Select
      </Button>
    </div>
  );
}

export default CharacterCard;
