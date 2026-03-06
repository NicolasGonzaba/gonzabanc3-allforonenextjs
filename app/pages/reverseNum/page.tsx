"use client"

import { fetchReverseNum } from '@/utils/service'
import React, { useState } from 'react'

const ReverseNumPage = () => {
    const [num, setNum] = useState("")
    const [result, setResult] = useState("")

    const handleSubmit = async () => {
        console.log(num)
        if (num === "" ) {
            setResult("Please enter a number")
            return
        } else
            setResult(await fetchReverseNum(num))

    }



    return (
        <div className=' flex min-h-screen text-center flex-col text-white items-center  font-sans bg-[url(/assets/wood-background.jpg)] bg-center bg-fill'>
            <h1 className='text-4xl justify-self-start md:text-5xl'>Reverse It (Numbers)</h1>
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

export default ReverseNumPage