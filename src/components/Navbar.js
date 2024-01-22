import React from 'react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast';

const Navbar = (props) => {

    let isLoggedIn = props.isLoggedIn;
    let setLoggedIn = props.setLoggedIn;

    return (
        <div className='flex justify-evenly '>
            <Link to="/">
                <img src='https://educationtoday.co/assets/img/educationtoday.png' width={160} height={32} loading='lazy' alt='' />
            </Link>
            <nav>
                <ul className='flex ml-6 gap-3'>
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
            <div className='flex ml-6 gap-3'>
                { !isLoggedIn && 
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                }
                {!isLoggedIn &&
                    <Link to="/signup">
                        <button>Sign Up</button>
                    </Link>
                }
                {isLoggedIn && 
                    <Link to="/">
                        <button onClick={() => {
                            setLoggedIn(false);
                            toast.success("Logged Out")
                        }}>Log Out</button>
                    </Link>
                }
                {isLoggedIn &&
                    <Link to="/dashboard">
                        <button>Dashboard</button>
                    </Link>
                }
            </div>
        </div >
    )
}

export default Navbar