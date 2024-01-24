import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const LoginFrom = ({ setLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(e) {
    setFormData((preData) => ({
      ...preData,
      [e.target.name]: e.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setLoggedIn(true);
    toast.success("Logged In");

    console.log("Printingg FInal Data...");
    console.log(formData);

    navigate("/dashboard");
  }

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col w-full gap-y-4 mt-6"
    >
      <label className="w-full">
        <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
          Email Address<sup className="text-pink-900">*</sup>
        </p>
        <input
          className="bg-teal-800 rounded-[0.5rem] text-white w-full p-[12px]"
          type="email"
          name="email"
          value={formData.email}
          onChange={changeHandler}
          required
          placeholder="Enter Email Address"
        />
      </label>
      <label className="w-full relative">
        <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
          Password<sup className="text-pink-900">*</sup>
        </p>
        <input
          className="bg-teal-800 rounded-[0.5rem] text-white w-full p-[12px]"
          name="password"
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={changeHandler}
          required
          placeholder="Enter Password"
        />

        <span className="absolute right-3 top-[36px] cursor-pointer text-white" onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/> : <AiOutlineEye fontSize={24} fill="#AFB2BF"/>}
        </span>

        <Link to="#">
          <p className="text-xs-sm mt-1 text-blue-100 max-w-max ml-auto">Forgot Password</p>
        </Link>
      </label>

      <button className="bg-yellow-400 rounded-[8px] font-medium text-teal-900 px-[12px] py-[8px] mt-4">Login</button> 
    </form>
  );
};

export default LoginFrom;
