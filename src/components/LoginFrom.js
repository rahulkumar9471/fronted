import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const LoginFrom = ({setLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '', password: ''
    })

    const [showPassword,setShowPassword] = useState(false);

    function changeHandler(e) {
        setFormData((preData) => ({
            ...preData, [e.target.name]: e.target.value
        }))
    }

    function submitHandler(event){
        event.preventDefault();
        setLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
    }

    return (
        <form onSubmit={submitHandler}>
            
                <p>
                    Email Address<sup>*</sup>
                </p>
                <input
                    type="email"
                    name='email'
                    value={formData.email}
                    onChange={changeHandler}
                    required />
            
            
                <p>
                    Password<sup>*</sup>
                </p>
                <input
                    name='password'
                    type={showPassword ? ('text') : ('password')}
                    value={formData.password}
                    onChange={changeHandler}
                    required />

                <span  onClick={() => setShowPassword((prev) => !prev)}>{showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>) }</span>    

                <Link to="#">
                    <p>Forgot Password</p>
                </Link>
            

            <button>Login</button>
        </form>
    )
}

export default LoginFrom