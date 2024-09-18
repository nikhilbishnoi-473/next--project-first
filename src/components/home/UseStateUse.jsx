"use client";
import React, { useState } from "react";

const UseStateUse = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <div className=" flex justify-center">
        <div className=" flex flex-col items-center">
          <p className="pt-3 text-3xl text-red-600">{count}</p>
          <div className=" pt-4">
            <button
              className=" py-2 px-3 border bg-slate-600 text-white"
              onClick={() => setCount(count - 1)}
            >
              minus btn
            </button>
            <button
              className=" py-2 px-3 border bg-slate-600 text-white"
              onClick={() => setCount(count + 1)}
            >
              plus btn
            </button>
          </div>
          <h3
            className={`pt-4 text-4xl ${
              toggle ? "text-red-600" : "text-red-400"
            } `}
          >
            {toggle ? "bishnoi" : "bhadu"}
          </h3>
          <button
            onClick={() => setToggle(!toggle)}
            className={`py-3 px-3 border mt-5 ${
              toggle ? "bg-orange-800 text-white" : "bg-red-700 text-black"
            }`}
          >
            Toggle btn
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseStateUse;
