import { Button } from 'flowbite-react/components/Button';
import { NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, Navbar } from 'flowbite-react/components/Navbar';
// import { Navbar} from 'flowbite-react'
import React from 'react'

const NavHeader = () => {
  return (
    <Navbar fluid >
      
      <div className="flex md:order-2">
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="/" >
          Home
        </NavbarLink>
        <NavbarLink href="/pages/helloWorld">Hello World</NavbarLink>
        <NavbarLink href="/pages/addingNumbers">Adding Two Numbers</NavbarLink>
        <NavbarLink href="/pages/askingQuestions">Asking Questions</NavbarLink>
        <NavbarLink href="/pages/greaterOrLess">Greater or Lesser</NavbarLink>
        <NavbarLink href="/pages/madlib">Madlib</NavbarLink>
        <NavbarLink href="/pages/oddOrEven">Odd or Even</NavbarLink>
        <NavbarLink href="/pages/reverseAlphaNum">Reverse it (AlphaNumeric)</NavbarLink>
        <NavbarLink href="/pages/reverseNum">Reverse it (Numbers)</NavbarLink>
        <NavbarLink href="/pages/magic8Ball">Magic 8 Ball</NavbarLink>
        <NavbarLink href="/pages/restaurantPicker">Restaurant Picker</NavbarLink>

      </NavbarCollapse>
    </Navbar>
  );
}

export default NavHeader