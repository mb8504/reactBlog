import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="container flex justify-between ">
            <div className='pt-6 pb-6'>
                <a href="#">LOGO</a>
            </div>
            <button onClick={handleNav} className='z-50 fixed right-10 pt-6 pb-6 md:max-xl:hidden lg:hidden xl:hidden 2xl:hidden'>
                {!nav ? <AiOutlineMenu size={40} /> : <AiOutlineClose size={40} />}
            </button>

            <section id="mobile-menu" className={!nav ? 'fixed right-[-100%]' : 'fixed right-0 top-0 w-[60%] h-full bg-slate-600'}>
                <nav className='flex flex-col py-8'>
                    <ul className="flex flex-col items-center pt-28">
                        <li className='pb-8 text-xl'><a href="#">Home</a></li>
                        <li className='pb-8 text-xl'><a href="#">About</a></li>
                        <li className='text-xl'><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </section>
            
            <nav className='hidden md:block'>
                <ul className="flex">
                    <li><a href="#">Home</a></li>
                    <li className="pl-6"><a href="#">About</a></li>
                    <li className="pl-6"><a href="#">Contact</a></li>
                </ul>
            </nav>

        </div>
    )
}
 

export default Navbar