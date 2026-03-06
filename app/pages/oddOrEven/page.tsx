"use client"

import { fetchOdd } from '@/utils/service'
import React, { useState } from 'react'

const OddorEvenPage = () => {
    const [num, setNum] = useState("")
    const [result, setResult] = useState("")

    const handleSubmit = async () => {
        console.log(num)
        if (num === "") {
            setResult("Please enter  numbers")
            return
        } else
            setResult(await fetchOdd(num))

    }



    return (
        <div className=' flex min-h-screen text-center flex-col text-white items-center  font-sans bg-[url(/assets/wood-background.jpg)] bg-center bg-fill'>
            <h1 className='text-5xl justify-self-start'>Odd or Even</h1>
            <br />
            <main className='text-2xl flex flex-col justify-center items-center'>
            <div>
                <input className='bg-green-500 text-center w-60 m-2 md:w-90 rounded-2xl' placeholder='Enter a number' type="number" onChange={(event) => setNum(event.target.value)} />
            </div>
            
            <button className='bg-red-500 w-60 m-2 md:w-90 rounded-2xl' onClick={handleSubmit}>Submit</button>
            <br />
            <p className='text-3xl '>{result}</p>
            </main>
        </div>
    )
}

export default OddorEvenPage