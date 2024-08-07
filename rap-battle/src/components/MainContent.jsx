import React from 'react'
import CharacterCard from './CharacterCard'
import { Button } from './ui/button'

function MainContent() {
  return (
    <div className='bg-lightBlue m-4 rounded-lg p-5'>
        
        <div className='w-full flex justify-between'>
            <h1 className='font-semibold'>Select Characters for Rap Battle</h1>
            <Button variant="select">Start Battle</Button>
        </div>
        <div className='bg-gold mt-4 rounded-lg p-5'>
            <h1 className='text-lg font-semibold'>Character 1</h1>
            <div className='mt-2 w-full flex-wrap flex flex-row gap-2 md:gap-3 justify-between md:justify-start items-center'>
                <CharacterCard />  
                <CharacterCard />  
                <CharacterCard />  
                <CharacterCard />  
            </div>
             
        </div>
        <div className='bg-silver mt-4 rounded-lg p-5'>
            <h1 className='text-lg font-semibold '>Character 2</h1>
            <div className='mt-2 w-full flex-wrap flex flex-row gap-2 md:gap-3 justify-between md:justify-start items-center'>
                <CharacterCard />  
                <CharacterCard />  
                <CharacterCard />  
                <CharacterCard />  
                <CharacterCard />  
            </div>
        </div>
        
        
    </div>
  )
}

export default MainContent