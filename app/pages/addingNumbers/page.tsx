"use client"

import { fetchAdd } from '@/utils/service'
import React, { useState } from 'react'

const AddingNumbersPage = () => {
    const [num1, setNum1] = useState("")
    const [num2, setNum2] = useState("")
    const [result, setResult] = useState("")


    const handleSubmit = async () => {
        console.log(num1)
        console.log(num2)
        if (num1 === "" || num2 === "") {
            setResult("Please enter 2 numbers")
            return
        }else

        setResult(await fetchAdd(num1, num2))
        

    }



    return (
        <div className='flex min-h-screen text-center flex-col text-white items-center  font-sans bg-[url(/assets/wood-background.jpg)] bg-center bg-fill'>
            <h1 className='text-5xl justify-self-start'>Adding Two Numbers</h1>
           <br />
            <main className='text-2xl flex flex-col justify-center items-center'>
            
            <div>
                <input className='bg-green-500 m-2 text-center rounded-2xl' placeholder='Enter your first number' type="number" onChange={(event) => setNum1(event.target.value)} />
                <input className='bg-green-500 m-2 text-center rounded-2xl' placeholder='Enter your second number' type="number" onChange={(event) => setNum2(event.target.value)} />
            </div>
        
            <button className='text-2xl bg-red-500 w-75 rounded-2xl' onClick={handleSubmit}>Submit</button>
            <br />
            <p className='text-3xl '>{result}</p>
            </main>
        </div>
    )
}

export default AddingNumbersPage