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
  return (
    <div className="flex justify-center items-center h-screen bg-slate-500 relative">
      <Link className=" absolute top-0 left-0" href="/">
        <button className=" py-2 px-3 border ">Go to Hero</button>
      </Link>
      <p className=" text-3xl font-semibold">{count}</p>
    </div>
  );
};

export default Header;
