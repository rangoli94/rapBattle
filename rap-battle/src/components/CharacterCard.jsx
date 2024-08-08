import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import classNames from 'classnames';

function CharacterCard({ char, selectCharacter, isChar1, char1Name, char2Name }) {
  const cardClasses = classNames(
    'bg-white p-4 rounded-lg shadow-md text-center w-[10rem] h-[14rem] flex flex-col justify-between',
    {
      'border border-darkPurple': (isChar1 && char1Name === char.name) || (!isChar1 && char2Name === char.name),
      "cursor-not-allowed opacity-50": (isChar1 && char2Name === char.name) || (!isChar1 && char1Name === char.name)
    }
  );
  return (
    <div className={cardClasses}>

      <h5 className='mb-4 font-semibold'>{char.name}</h5>
      <div className='flex flex-col items-center'>
        <Avatar className='w-20 h-20 mb-4 border border-gray-300 rounded-full'>
          <AvatarImage src={char.img} alt='User Avatar' />
          <AvatarFallback>{char.name.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
      </div>
      <Button
        variant='selectChar' className='w-full'
        disabled={(isChar1 && char2Name === char.name) || (!isChar1 && char1Name === char.name)}
        onClick={() => selectCharacter(char, isChar1)}>
        Select
      </Button>
    </div>
  );
}

export default CharacterCard;
