"use client"

import { fetchRestaurant } from '@/utils/service'
import React, { useState } from 'react'

const RestaurantPickerPage = () => {
    const [pick, setPick] = useState("")
    const [result, setResult] = useState("")

    const handleSubmit = async () => {
        console.log(pick)
        if (pick === "" || pick === " ") {
            setResult("Please enter 'Mexican', 'Pizza', or 'Fast Food'")
        }else
        setResult(await fetchRestaurant(pick))
    }



    return (
        <div className=' flex min-h-screen text-center flex-col text-white items-center  font-sans bg-[url(/assets/wood-background.jpg)] bg-center bg-fill'>
            <h1 className='text-5xl justify-self-start'>Restaurant Picker</h1>
            <br />
            <main className='text-1xl flex flex-col justify-center items-center'>
            <div>
                <input className='bg-green-500 text-center w-70 m-2 md:w-100 rounded-2xl md:text-2xl' placeholder='Enter Pizza, Mexican, or Fast Food' type="text" onChange={(event) => setPick(event.target.value)} />
            </div>
            <button className='bg-red-500 w-70 m-2 md:w-100 rounded-2xl text-2xl' onClick={handleSubmit}>Submit</button>
            <br />
            <p className='text-3xl '>{result}</p>
            </main>
        </div>
    )
}

export default RestaurantPickerPage