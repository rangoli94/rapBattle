import React, { useEffect, useState } from 'react'
import MessageComponent from './MessageComponent'
import { useLocation, useNavigate } from 'react-router-dom'
import useGeminiAI from '../customHooks/useGeminiAI.hook'
import Loader from './ui/loader'
import { Badge } from "./ui/badge"
import { Button } from './ui/button'

function RapWindow() {
      const [rapArray, setRapArray] = useState([])
      const location = useLocation()
      const { char1, char2, prompt } = location.state || {}
      const { result, isLoading, error } = useGeminiAI({ prompt })
      const navigate = useNavigate()

      useEffect(() => {
            if (result) {
                  setRapArray(result)
            }
      }, [isLoading, error, result])

      const editContent = (idx, editableContent) => {
            const newArray = [...rapArray]
            newArray[idx] = editableContent
            setRapArray(newArray)
      }

      return (
            <>
                  <Button variant="link" onClick={() => navigate('/')}>Back</Button>
                  <div className='bg-lightBlue m-4 mt-2 rounded-lg p-5'>
                        <div className='w-full flex justify-between'>
                              <h1 className='font-semibold'>Let the Battle Begin....</h1>
                        </div>
                        <div className='w-[60%] mx-auto'>
                              {
                                    isLoading ? <Loader /> :
                                          (
                                                error ? <Badge variant="destructive">Something went wrong</Badge> :
                                                      rapArray?.map((rap, id) => <MessageComponent
                                                            key={id}
                                                            idx={id}
                                                            isChar1Message={id % 2 === 0}
                                                            editContent={editContent}
                                                            text={rap} char={id % 2 === 0 ? char1 : char2}
                                                      />)
                                          )

                              }
                        </div>
                  </div>
            </>

      )
}

export default RapWindow