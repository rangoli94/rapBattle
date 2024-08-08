import React, { useState } from 'react'
import CharacterCard from './CharacterCard'
import { Button } from './ui/button'
import { characters } from '../Contants'

function MainContent() {
    const [char1, setChar1] = useState()
    const [char2, setChar2] = useState()

    const selectCharacter = (character, isChar1) => {
        if(isChar1) {
            setChar1(character)
        } else {
            setChar2(character)
        }
    }
    // console.log("char1->",char1)
    // console.log("char2->",char2)
    return (
        <div className='bg-lightBlue m-4 rounded-lg p-5'>

            <div className='w-full flex justify-between'>
                <h1 className='font-semibold'>Select Characters for Rap Battle</h1>
                <Button 
                variant="select"
                disabled={!char1 || !char2}
                >
                    Start Battle
                </Button>
            </div>
            <div className='bg-gold mt-4 rounded-lg p-5'>
                <h1 className='text-lg font-semibold'>Character 1</h1>
                <div className='mt-2 w-full flex-wrap flex flex-row gap-2 md:gap-3 justify-between md:justify-start items-center'>
                    {
                        characters?.map(char => {
                            return <CharacterCard 
                            key={char.id} char={char} 
                            isChar1={true} selectCharacter={selectCharacter} 
                            char1Name={char1?.name} char2Name={char2?.name}
                            />
                        })
                    }
                </div>

            </div>
            <div className='bg-silver mt-4 rounded-lg p-5'>
                <h1 className='text-lg font-semibold '>Character 2</h1>
                <div className='mt-2 w-full flex-wrap flex flex-row gap-2 md:gap-3 justify-between md:justify-start items-center'>
                    {
                        characters?.map(char => {
                            return <CharacterCard 
                            key={char.id} char={char} 
                            isChar1={false} selectCharacter={selectCharacter} 
                            char1Name={char1?.name} char2Name={char2?.name}
                            />
                        })
                    }
                </div>
            </div>


        </div>
    )
}

export default MainContent