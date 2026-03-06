"use client"

import { fetchAsk, fetchMad } from '@/utils/service'
import React, { useState } from 'react'

const MadlibPage = () => {
    const [name, setName] = useState("")
    const [mood, setMood] = useState("")
    const [food, setFood] = useState("")
    const [animal, setAnimal] = useState("")
    const [adjective, setAdjective] = useState("")
    const [item, setItem] = useState("")
    const [place, setPlace] = useState("")
    const [activity, setActivity] = useState("")
    const [result, setResult] = useState("")

    const handleSubmit = async () => {
        console.log(name)
        console.log(mood)
        console.log(food)
        console.log(animal)
        console.log(adjective)
        console.log(item)
        console.log(place)
        console.log(activity)
        if (name === "" || name === " " || mood === "" || mood === " " || food === "" || food === " " || animal === "" || animal === " " || adjective === "" || adjective === " " || item === "" || item === " " || place === "" || place === " " || activity === "" || activity === " ") {
            setResult("Please enter all 8 inputs")
        } else
            setResult(await fetchMad(name, mood, food, animal, adjective, item, place, activity))

    }



    return (
        <div className=' flex min-h-screen text-center flex-col text-white items-center  font-sans bg-[url(/assets/wood-background.jpg)] bg-center bg-fill'>
            <h1 className='text-5xl justify-self-start'>Madlib</h1>
            <br />
            <main className='text-2xl flex flex-col justify-center items-center'>
                <div>
                    <input className='bg-green-500 text-center m-1 w-60 md:text-2xl rounded-2xl' placeholder='Name' type="text" onChange={(event) => setName(event.target.value)} />
                    <input className='bg-green-500 text-center m-1 w-60 md:text-2xl rounded-2xl' placeholder='Mood' type="text" onChange={(event) => setMood(event.target.value)} />
                    <input className='bg-green-500 text-center m-1 w-60 md:text-2xl rounded-2xl' placeholder='Food' type="text" onChange={(event) => setFood(event.target.value)} />
                    <input className='bg-green-500 text-center m-1 w-60 md:text-2xl rounded-2xl' placeholder='Animal' type="text" onChange={(event) => setAnimal(event.target.value)} />
                    <input className='bg-green-500 text-center m-1 w-60 md:text-2xl rounded-2xl' placeholder='Adjective' type="text" onChange={(event) => setAdjective(event.target.value)} />
                    <input className='bg-green-500 text-center m-1 w-60 md:text-2xl rounded-2xl' placeholder='Object' type="text" onChange={(event) => setItem(event.target.value)} />
                    <input className='bg-green-500 text-center m-1 w-60 md:text-2xl rounded-2xl' placeholder='Place' type="text" onChange={(event) => setPlace(event.target.value)} />
                    <input className='bg-green-500 text-center m-1 w-60 md:text-2xl rounded-2xl' placeholder='Activity' type="text" onChange={(event) => setActivity(event.target.value)} />
                </div>
                <br />
                <button className='bg-red-500 text-2xl m-2 w-60 rounded-2xl' onClick={handleSubmit}>Submit</button>
                <br />
                <p className='3xl'>{result}</p>
            </main>
        </div>
    )
}

export default MadlibPage