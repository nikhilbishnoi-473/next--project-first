"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  const inputData = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [inputtext, setInputText] = useState(inputData);
  const [error, setError] = useState(false);
  const buttonhandle = (e) => {
    e.preventDefault();
    console.log("value = ", inputtext);
    setError(true);
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-slate-500 relative">
        <Link className=" absolute top-0 left-0" href="/">
          <button className=" py-2 px-3 border ">Go to Hero</button>
        </Link>

        <div className=" flex flex-col items-center ">
          <p className=" text-3xl font-semibold">{count}</p>
          <div className="flex flex-col gap-7 p-5 border mt-5">
            <div className=" relative">
              <input
                type="text"
                placeholder="name"
                className="w-[300px] px-4 py-2"
                onChange={(e) =>
                  setInputText({ ...inputtext, name: e.target.value })
                }
                value={inputtext.name}
              />
              <p className="absolute -bottom-6 left-3">
                {error && inputtext.name === "" ? "fill name" : ""}
              </p>
            </div>
            <div className=" relative">
              <input
                type="gmail"
                placeholder="email"
                className="w-[300px] px-4 py-2"
                onChange={(e) =>
                  setInputText({ ...inputtext, email: e.target.value })
                }
                value={inputtext.email}
              />
              <p className="absolute -bottom-6 left-3">
                {error && inputtext.email === "" ? "fill email" : ""}
              </p>
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder="password"
                className="w-[300px] px-4 py-2"
                onChange={(e) =>
                  setInputText({ ...inputtext, password: e.target.value })
                }
                value={inputtext.password}
              />
              <p className="absolute -bottom-6 left-3">
                {error && inputtext.password === "" ? "fill password" : ""}
              </p>
            </div>
            <div className=" relative">
              <input
                type="password"
                placeholder="confirm password"
                className="w-[300px] px-4 py-2"
                onChange={(e) =>
                  setInputText({
                    ...inputtext,
                    confirmPassword: e.target.value,
                  })
                }
                value={inputtext.confirmPassword}
              />
              <p className="absolute -bottom-6 left-3">
                {error && inputtext.confirmPassword === ""
                  ? "fill conform password"
                  : ""}
              </p>
            </div>

            <button
              onClick={(e) => buttonhandle(e)}
              className="text-white px-4 py-3 border "
            >
              click
            </button>
          </div>
        </div>
      </div>
      <div className="h-screen bg-red-500"></div>
    </div>
  );
};

export default Header;
