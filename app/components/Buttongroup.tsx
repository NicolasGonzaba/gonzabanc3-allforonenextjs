import { Button, ButtonGroup } from 'flowbite-react/components/Button'
import React from 'react'

const Buttongroup = () => {
  return (
   <div className="flex flex-wrap gap-5 justify-center">
      <Button className='w-50' color="green" href="/pages/helloWorld">Hello, World!</Button>
      <Button className='w-50' color="green" href="/pages/addingNumbers">Add two numbers</Button>
      <Button className='w-50' color="green" href="/pages/askingQuestions">Asking Questions</Button>
      <Button className='w-50' color="green" href="/pages/greaterOrLess">Greater or Lesser</Button>
      <Button className='w-50' color="green" href="/pages/madlib">MadLib</Button>
      <Button className='w-50' color="green" href="/pages/oddOrEven">Odd or Even</Button>
      <Button className='w-50' color="green" href="/pages/reverseAlphaNum">Reverse it (AlphaNumeric)</Button>
      <Button className='w-50' color="green" href="/pages/reverseNum">Reverse it (Numbers)</Button>
      <Button className='w-50' color="green" href="/pages/magic8Ball">Magic 8 Ball</Button>
      <Button className='w-50' color="green" href="/pages/restaurantPicker">Restaurant Picker</Button>
    </div>


  )
}

export default Buttongroup