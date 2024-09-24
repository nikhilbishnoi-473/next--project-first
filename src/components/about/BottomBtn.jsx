"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const BottomBtn = () => {
  const [changing, setChanging] = useState(false);
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleclick = () => {
    if (window.scrollY > 200) {
      setChanging(true);
    } else {
      setChanging(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleclick);
    return () => {
      window.removeEventListener("scroll", handleclick);
    };
  }, []);
  return (
    <div>
      {changing && (
        <button
          onClick={handleScroll}
          className="size-[70px] fixed bottom-4 text-white border-[3px] right-3 rounded-full"
        >
          <FontAwesomeIcon icon={faArrowUp} className="text-4xl text-white" />
        </button>
      )}
    </div>
  );
};

export default BottomBtn;
