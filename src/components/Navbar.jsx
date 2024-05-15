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
            <section className="fixed inset-0 bg-slate-500 text-3xl flex flex-col justify-center origin-top hidden">
                {/* <button className="absolute top-6 right-1 text-4xl px-6">
                    <AiOutlineClose size={40}/>
                </button> */}
                <nav className='flex flex-col py-8'>
                    <ul className="flex flex-col items-center">
                        <li className='pb-8'><a href="#">Home</a></li>
                        <li className='pb-8'><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </section>

            <button onClick={handleNav} id='' className='pt-6 pb-6 md:max-xl:hidden'>
                {!nav ? <AiOutlineClose size={40} /> : <AiOutlineMenu size={40} />}
            </button>
            
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