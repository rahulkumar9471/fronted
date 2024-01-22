import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setLoggedIn}) => {

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        cpassword: '',
    })

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
        <div>
            <div>
                <button>Student</button>
                <button>Instructor</button>
            </div>
            <form onSubmit={submitHandler}>
                <div>

                    <p>
                        First name<sup>*</sup>
                    </p>
                    <input
                        type="text"
                        name='fname'
                        value={formData.fname}
                        onChange={changeHandler}
                        required />


                    <p>
                        Last name<sup>*</sup>
                    </p>
                    <input
                        type="text"
                        name='lname'
                        value={formData.lname}
                        onChange={changeHandler}
                        required />

                </div>
                <div>

                    <p>
                        Email<sup>*</sup>
                    </p>
                    <input
                        type="text"
                        name='email'
                        value={formData.email}
                        onChange={changeHandler}
                        required />

                </div>
                <div>

                    <p>
                        Password<sup>*</sup>
                    </p>
                    <input
                        type={showPassword ? ("text") : ("password")}
                        name='password'
                        value={formData.password}
                        onChange={changeHandler}
                        required />
                    <span onClick={() => setShowPassword((prev) => !prev)}>{showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}</span>


                    <p>
                        Confirm Password<sup>*</sup>
                    </p>
                    <input
                        type={showPassword ? ("text") : ("password")}
                        name='cpassword'
                        value={formData.cpassword}
                        onChange={changeHandler}
                        required />
                    <span onClick={() => setShowPassword((prev) => !prev)}>{showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}</span>

                </div>
                <button>Create Acount</button>
            </form>
        </div>
    )
}

export default SignupForm