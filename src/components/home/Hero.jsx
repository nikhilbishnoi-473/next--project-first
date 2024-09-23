import Link from "next/link";
import React from "react";
import UseStateUse from "./UseStateUse";
import Devide from "./Devide";
const Hero = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-600 relative">
      <Link href="office">
        <button className=" absolute left-0 top-0 px-4 py-3 border ">
          office
        </button>
      </Link>
      <div className=" flex flex-col">
        <Devide />
        <UseStateUse />
      </div>
    </div>
  );
};
export default Hero;
