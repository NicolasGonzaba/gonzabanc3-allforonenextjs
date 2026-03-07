"use client"

import { fetchAsk } from '@/utils/service'
import React, { useState } from 'react'

const AskingQuestionsPage = () => {
    const [name, setName] = useState("")
    const [time, setTime] = useState("")
    const [result, setResult] = useState("")

    const handleSubmit = async () => {
        console.log(name)
        console.log(time)
        if (name === "" || name === " " || time===""|| time===" ") {
            setResult("Please enter your name and time")
        }else
        setResult(await fetchAsk(name, time))

    }



    return (
        <div className='flex min-h-screen text-center flex-col text-white items-center  font-sans bg-[url(/assets/wood-background.jpg)] bg-center bg-fill'>
            <h1 className='text-5xl justify-self-start'>Asking Questions</h1>
            <main className='text-2xl flex flex-col justify-center items-center'>
           <br />
            
            <div>
                <input className='bg-green-500 m-2 text-center w-90 rounded-2xl' placeholder='What is your name?' type="text" onChange={(event) => setName(event.target.value)} />
                <input className='bg-green-500 m-2 text-center w-90 rounded-2xl' placeholder='What time did you wake up?' type="text" onChange={(event) => setTime(event.target.value)} />
            </div>
            <br />
            <button className='text-2xl bg-red-500 w-90 rounded-2xl' onClick={handleSubmit}>Submit</button>
            <br />
            <p className='text-3xl'>{result}</p>
            </main>
        </div>
    )
}

export default AskingQuestionsPage