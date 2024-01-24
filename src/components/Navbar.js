import React from 'react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast';

const Navbar = (props) => {

    let isLoggedIn = props.isLoggedIn;
    let setLoggedIn = props.setLoggedIn;

    return (
        <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
            <Link to="/">
                <img src='https://educationtoday.co/assets/img/educationtoday.png' width={160} height={32} loading='lazy' alt='' />
            </Link>
            <nav>
                <ul className='text-white flex ml-6 gap-3'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>
            <div className='flex item-center gap-x-4'>
                { !isLoggedIn && 
                    <Link to="/login">
                        <button className='bg-teal-800 text-white py-[8px] px-[12px] rounded-[8px] border border-teal-800' >Login</button>
                    </Link>
                }
                {!isLoggedIn &&
                    <Link to="/signup">
                        <button className='bg-teal-800 text-white py-[8px] px-[12px] rounded-[8px] border border-teal-800'>Sign Up</button>
                    </Link>
                }
                {isLoggedIn && 
                    <Link to="/">
                        <button className='bg-teal-800 text-white py-[8px] px-[12px] rounded-[8px] border border-teal-800'
                         onClick={() => {
                            setLoggedIn(false);
                            toast.success("Logged Out")
                        }}>Log Out</button>
                    </Link>
                }
                {isLoggedIn &&
                    <Link to="/dashboard">
                        <button className='bg-teal-800 text-white py-[8px] px-[12px] rounded-[8px] border border-teal-800'>Dashboard</button>
                    </Link>
                }
            </div>
        </div >
    )
}

export default Navbar