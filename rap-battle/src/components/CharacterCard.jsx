import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';

function CharacterCard({ name, img }) {
  return (
    <div className='bg-white p-4 rounded-lg shadow-md text-center w-[10rem] h-[14rem] flex flex-col justify-between'>

      <h5 className='mb-4 font-semibold'>{name}</h5>
      <div className='flex flex-col items-center'>
        <Avatar className='w-20 h-20 mb-4 border border-gray-300 rounded-full'>
          <AvatarImage src={img} alt='User Avatar' />
          <AvatarFallback>{name.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
      </div>
      <Button variant='selectChar' className='w-full'>
        Select
      </Button>
    </div>
  );
}

export default CharacterCard;
