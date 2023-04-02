import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";

const Form = ({ isSignInPage = true }) => {
  //
  const [data, setData] = useState({
    ...(!isSignInPage && {
      fullName: "",
    }),
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  //
  return (
    <div className="bg-light h-screen flex items-center justify-center">
      <div className="bg-white w-[600px] h-[800px] shadow-lg flex flex-col justify-center items-center">
        <div className="text-4xl font-extrabold">
          Welcome {isSignInPage ? "Back" : "Sir"}
        </div>
        <div className="text-xl font-light font-serif mb-14">
          {!isSignInPage
            ? " Become one of us...."
            : "Prove that you are one of us...."}
        </div>
        {!isSignInPage && (
          <Input
            label="Your Name"
            name="name"
            placeholder="Name here..."
            className="mb-6 w-[75%]"
            value={data.fullName}
            onChange={(e) => setData({ ...data, fullName: e.target.value })}
          />
        )}
        <Input
          label="Email Address"
          name="email"
          type="email"
          placeholder="Email here..."
          className="mb-6 w-[75%]"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="Password here..."
          className="mb-14 w-[75%]"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <Button
          label={isSignInPage ? "Log in" : "Sign up"}
          type="submit"
          className="w-[75%] mb-2"
        />
        <div>
          {isSignInPage
            ? "Didn't have an account?..."
            : "Already have an account?..."}
          <span
            className="text-primary font-serif cursor-pointer"
            onClick={() =>
              navigate(`/users/${isSignInPage ? "sign_up" : "sign_in"}`)
            }
          >
            {isSignInPage ? "Sign up" : "Log in"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Form;
