import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-500 relative">
      Header
      <Link className=" absolute top-0 left-0" href="/">
        <button className=" py-2 px-3 border ">Go to Hero</button>
      </Link>
    </div>
  );
};

export default Header;
