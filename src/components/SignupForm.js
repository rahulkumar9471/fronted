import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setLoggedIn }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showCpassword, setShowCpassword] = useState(false);
  const [accountType, setAccountType] = useState("student");

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  function changeHandler(e) {
    setFormData((preData) => ({
      ...preData,
      [e.target.name]: e.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.cpassword) {
      toast.error("Passwords do not match");
      return;
    }
    setLoggedIn(true);
    toast.success("Account has been Created");

    const accountData = {
      ...formData
    }

    const finalData = {
      ...accountData,
      accountType
    }

    console.log("Printingg FInal Data...");
    console.log(finalData);

    navigate("/dashboard");
  }

  return (
    <div>
      <div className="flex bg-teal-700 p-1 gap--1 my-6 rounded-full max-w-max">
        <button
          className={`${
            accountType === "student"
              ? "bg-teal-900 text-white"
              : "bg-transparent text-teal-700 "
          } py-2 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("student")}
        >
          Student
        </button>
        <button
          className={`${
            accountType === "instructor"
              ? "bg-teal-900 text-white"
              : "bg-transparent text-teal-700 "
          } py-2 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("instructor")}
        >
          Instructor
        </button>
      </div>
      <form onSubmit={submitHandler}>
        <div className="flex mt-3 gap-x-4">
          <lable className="w-full">
            <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
              First name<sup className="text-pink-900">*</sup>
            </p>
            <input
              className="bg-teal-800 rounded-[0.5rem] text-white w-full p-[12px]"
              type="text"
              name="fname"
              value={formData.fname}
              onChange={changeHandler}
              required
            />
          </lable>
          <lable className="w-full">
            <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
              Last name<sup className="text-pink-900">*</sup>
            </p>
            <input
              className="bg-teal-800 rounded-[0.5rem] text-white w-full p-[12px]"
              type="text"
              name="lname"
              value={formData.lname}
              onChange={changeHandler}
              required
            />
          </lable>
        </div>
        <div className="mt-3">
          <lable className="w-full">
            <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
              Email<sup className="text-pink-900">*</sup>
            </p>
            <input
              className="bg-teal-800 rounded-[0.5rem] text-white w-full p-[12px]"
              type="text"
              name="email"
              value={formData.email}
              onChange={changeHandler}
              required
            />
          </lable>
        </div>
        <div className="flex mt-3 gap-x-4">
          <lable className="w-full relative">
            <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
              Password<sup className="text-pink-900">*</sup>
            </p>
            <input
              className="bg-teal-800 rounded-[0.5rem] text-white w-full p-[12px]"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={changeHandler}
              required
            />
            <span
              className="absolute right-3 top-[36px] cursor-pointer text-white"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </lable>
          <lable className="w-full relative">
            <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
              Confirm Password<sup className="text-pink-900">*</sup>
            </p>
            <input
              className="bg-teal-800 rounded-[0.5rem] text-white w-full p-[12px]"
              type={showCpassword ? "text" : "password"}
              name="cpassword"
              value={formData.cpassword}
              onChange={changeHandler}
              required
            />
            <span
              className="absolute right-3 top-[36px] cursor-pointer text-white"
              onClick={() => setShowCpassword((prev) => !prev)}
            >
              {showCpassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </lable>
        </div>
        <button className="w-full bg-yellow-400 rounded-[8px] font-medium text-teal-900 px-[12px] py-[8px] mt-4">
          Create Acount
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
