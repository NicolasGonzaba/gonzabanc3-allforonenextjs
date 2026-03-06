"use client"

import { fetchHello } from '@/utils/service'
import React, { useState } from 'react'

const HelloWorldPage = () => {
  const [name, setName] = useState("")
    const [result, setResult] = useState("")

    const handleSubmit = async () => {
        console.log(name)
        if (name === "" || name===" ") {
            setResult("Please enter your name")
        }else
        setResult(await fetchHello(name))

    }



    return (
        <div className='flex min-h-screen text-center flex-col text-white items-center  font-sans bg-[url(/assets/wood-background.jpg)] bg-center bg-fill'>
           <h1 className='text-5xl justify-self-start'>Hello, World!</h1>
           <br />
            <main className='flex flex-col justify-center'>
            
                
            <div>
                <input  className='text-2xl bg-green-500 text-center rounded-2xl' placeholder='What is your name?' type="text" onChange={(event) => setName(event.target.value)} />
            </div>
            
            <button className='text-2xl bg-red-500 rounded-2xl' onClick={handleSubmit}>Submit</button>
            <br />
            <p className='text-3xl '>{result}</p>
            </main>
        </div>
    )
}

export default HelloWorldPage