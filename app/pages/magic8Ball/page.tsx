"use client"

import { fetchMagic } from '@/utils/service'
import React, { useState } from 'react'

const Magic8BallPage = () => {
    const [question, setQuestion] = useState("")
    const [result, setResult] = useState("")

    const handleSubmit = async () => {
        console.log(question)
        if (question === "" || question === " ") {
            setResult("Please ask a question.")
        }else
        setResult(await fetchMagic(question))

    }



    return (
        <div className=' flex min-h-screen text-center flex-col text-white items-center  font-sans bg-[url(/assets/wood-background.jpg)] bg-center bg-fill'>
            <h1 className='text-5xl justify-self-start'>Magic 8 Ball</h1>
            <br />
            <main className='text-2xl flex flex-col justify-center items-center'>
            <div>
                <input className='bg-green-500 text-center w-70 m-2 md:w-90 rounded-2xl' placeholder='Ask a question' type="text" onChange={(event) => setQuestion(event.target.value)} />
            </div>
            
            <button className='bg-red-500 w-70 m-2 md:w-90 rounded-2xl' onClick={handleSubmit}>Submit</button>
            <br />
            <p className='text-3xl '>{result}</p>
            </main>
        </div>
    )
}

export default Magic8BallPage