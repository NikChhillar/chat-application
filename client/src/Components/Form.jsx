import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";

const Form = () => {
  return (
    <div className="bg-light h-screen flex items-center justify-center">
      <div className="bg-white w-[600px] h-[800px] shadow-lg flex flex-col justify-center items-center">
        <div className="text-4xl font-extrabold">Welcome Lord Ainz...</div>
        <div className="text-xl font-light font-serif mb-14">
          Become one of us..../Prove that you are one of us....
        </div>
        <Input
          label="Your Name"
          name="name"
          placeholder="Name here..."
          className="mb-6 w-[75%]"
          value={""}
          onChange={() => {}}
        />
        <Input
          label="Email Address"
          name="email"
          type="email"
          placeholder="Email here..."
          className="mb-6 w-[75%]"
          value={""}
          onChange={() => {}}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="Password here..."
          className="mb-14 w-[75%]"
          value={""}
          onChange={() => {}}
        />
        <Button
          label="Sign In/Sign Up"
          type="submit"
          className="w-[75%] mb-2"
        />
        <div>
          Didn't have an account/Already have an account{" "}
          <span
            className="text-primary cursor-pointer underline"
            onClick={() => {}}
          >
            Sign In/Sign Up
          </span>
        </div>
      </div>
    </div>
  );
};

export default Form;
