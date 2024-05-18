import { Button, Navbar, TextInput } from 'flowbite-react'
import React from 'react'
import { Link ,useLocation} from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaSun } from 'react-icons/fa'

const Header = () => {

    const path =useLocation().pathname
  return (
    <Navbar className='border-b-2'>
        <Link to="/" className='self-center text-sm sm:text-xl font-semibold dark:text-white whitespace-nowrap'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg'>Maaz's</span>
            Blog
        </Link>
        <form>
            <TextInput type='text' placeholder='Search...' rightIcon={AiOutlineSearch} className='hidden lg:inline' />
        </form>
        <Button className='w-12 h-18 pill lg:hidden' color='gray'>
            <AiOutlineSearch />
        </Button>
        <div className='flex gap-2 md:order-2'>
            <Button className='w-12 h-18 pill hidden sm:inline' color='gray' pill>
                <FaSun />
            </Button>
            <Link to="/signin" >
                <Button gradientDuoTone="purpleToBlue" outline >SignIn</Button>
            </Link>
            <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
            <Navbar.Link active={path==='/home'} as={'div'}>
                <Link to='/home' >Home</Link>
            </Navbar.Link>
            <Navbar.Link active={path==='/about'} as={'div'}>
                <Link to='/about' >About</Link>
            </Navbar.Link>
            <Navbar.Link active={path==='/projects'} as={'div'}>
                <Link to='/projects' >Projects</Link>
            </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Header