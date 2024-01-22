import React, { useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

const SignupForm = () => {

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

    return (
        <div>
            <div>
                <button>Student</button>
                <button>Instructor</button>
            </div>
            <form>
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
                        name='lname'
                        value={formData.lname}
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
                    <span onClick={setShowPassword((prev) => !prev)}>{showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}</span>


                    <p>
                        Confirm Password<sup>*</sup>
                    </p>
                    <input
                        type="password"
                        name='cpassword'
                        value={formData.cpassword}
                        onChange={changeHandler}
                        required />
                    <span onClick={setShowPassword((prev) => !prev)}>{showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}</span>

                </div>
                <button>Create Acount</button>
            </form>
        </div>
    )
}

export default SignupForm