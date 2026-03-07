"use client"

import { fetchReverseAlpha } from '@/utils/service'
import React, { useState } from 'react'

const ReverseAlphaNumPage = () => {
    const [alphaNum, setAlphaNum] = useState("")
    const [result, setResult] = useState("")

    const handleSubmit = async () => {
        console.log(alphaNum)
        if (alphaNum === "" || alphaNum === " ") {
            setResult("An input of multiple characters")
        }else
        setResult(await fetchReverseAlpha(alphaNum))

    }



    return (
        <div className=' flex min-h-screen text-center flex-col text-white items-center  font-sans bg-[url(/assets/wood-background.jpg)] bg-center bg-fill'>
            <h1 className='text-4xl justify-self-start md:text-5xl'>Reverse It (Alpha Numeric)</h1>
            <br />
            <main className='text-2xl flex flex-col justify-center items-center'>
            <div>
                <input className='bg-green-500 text-center w-60 m-2 md:w-90 rounded-2xl' placeholder='Enter an input' type="text" onChange={(event) => setAlphaNum(event.target.value)} />
            </div>
            
            <button className='bg-red-500 w-60 m-2 md:w-90 rounded-2xl' onClick={handleSubmit}>Submit</button>
            <br />
            <p className='text-3xl '>{result}</p>
            </main>
        </div>
    )
}

export default ReverseAlphaNumPage