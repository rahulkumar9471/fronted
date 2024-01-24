import React from "react";
import SignupForm from "./SignupForm";
import LoginFrom from "./LoginFrom";
import { FcGoogle } from "react-icons/fc";

const LoginTemplet = ({
  title,
  desc1,
  desc2,
  image,
  formType,
  setLoggedIn,
}) => {
  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-2 mx-auto gap-x-1 gap-y-0">
      <div className="w-11/12 max-w-[450px]">
        <h1 className="text-white font-semibold text-[1.875rem] leading-[2.975rem]">
          {title}
        </h1>
        <p className="text-[1.125rem] leading[1.625rem] mt-4">
          <span className="text-blue-100 ">{desc1}</span>
          <br />
          <span className="text-blue-100 italic">{desc2}</span>
        </p>

        {formType === "signup" ? (
          <SignupForm setLoggedIn={setLoggedIn} />
        ) : (
          <LoginFrom setLoggedIn={setLoggedIn} />
        )}
        <div className="flex w-full items-center my-4 gap-x-2">
          <div className="h-[1px] w-full bg-blue-100"></div>
          <p className="text-blue-100 font-medium leading[1.625rem]">OR</p>
          <div className="h-[1px] w-full bg-blue-100"></div>
        </div>

        <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-blue-100 border border-blue-100 px-[12px] py-[8px] gap-x-2 mt-6">
          <FcGoogle />
          <p>Sign up with Google</p>
        </button>
      </div>
      <div className="relative w-11/12 max-w-[450px]">
        <img src={image} width={558} height={504} loading="lazy" alt="" />
        <img src={image} width={558} height={504} loading="lazy" alt="" className="absolute -top-4 right-4" />
      </div>
    </div>
  );
};

export default LoginTemplet;
