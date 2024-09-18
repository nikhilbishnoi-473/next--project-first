"use client";
import React, { useState } from "react";

const Devide = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center">
        <p className="text-3xl pt-5">{count}</p>
        <div className="flex pt-4">
          <button
            className="py-2 px-3 border bg-slate-600 text-white"
            onClick={() => setCount(count + 1)}
          >
            add Value
          </button>
          <button
            className="py-2 px-3 border bg-slate-600 text-white"
            onClick={() => setCount(count * 2)}
          >
            Multiply
          </button>
          <button
            className="py-2 px-3 border bg-slate-600 text-white"
            onClick={() => setCount(count / 2)}
          >
            devide
          </button>
          <button
            className="py-2 px-3 border bg-slate-600 text-white"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Devide;
