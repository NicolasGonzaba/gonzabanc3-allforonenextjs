"use client"

import { fetchGreater } from '@/utils/service'
import React, { useState } from 'react'

const GreaterOrLessPage = () => {
    const [num1, setNum1] = useState("")
    const [num2, setNum2] = useState("")
    const [result, setResult] = useState("")

    const handleSubmit = async () => {
        console.log(num1)
        console.log(num2)
        if (num1 === "" || num2 === "") {
            setResult("Please enter 2 numbers")
            return
        } else
            setResult(await fetchGreater(num1, num2))

    }



    return (
        <div className='flex min-h-screen text-center flex-col text-white items-center  font-sans bg-[url(/assets/wood-background.jpg)] bg-center bg-fill'>
            <h1 className='text-5xl justify-self-start'>Greater or Lesser</h1>
            <main className='text-2xl flex flex-col justify-center items-center'>
            <div>
                <input className='bg-green-500 m-2 text-center w-90 rounded-2xl' placeholder='Enter your first number' type="number" onChange={(event) => setNum1(event.target.value)} />
                <input className='bg-green-500 m-2 text-center w-90 rounded-2xl' placeholder='Enter your second number' type="number" onChange={(event) => setNum2(event.target.value)} />
            </div>
            <br />
            <button className='text-2xl bg-red-500 w-90 rounded-2xl' onClick={handleSubmit}>Submit</button>
            <br />
            <p className='text-3xl'>{result}</p>
            </main>
        </div>
    )
}

export default GreaterOrLessPage