"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const BottomBtn = () => {
  const [changing, setChanging] = useState(false);
  const topScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const topClick = () => {
    if (window.scrollY > 200) {
      setChanging(true);
    } else {
      setChanging(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", topClick);
    return () => {
      window.removeEventListener("scroll", topClick);
    };
  }, []);
  return (
    <div className=" max-w-[1920px]">
      {changing && (
        <button
          onClick={topScroll}
          className="size-[50px] fixed bottom-4 text-white border-[3px] right-3 rounded-full"
        >
          <FontAwesomeIcon icon={faArrowUp} className="text-2xl text-white" />
        </button>
      )}
    </div>
  );
};

export default BottomBtn;
