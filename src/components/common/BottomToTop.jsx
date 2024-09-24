"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const BottomToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClickButton = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      {isVisible && (
        <button
          onClick={handleClickButton}
          className="bg-transparent border-[3px] border-black rounded-full w-[70px] h-[70px] fixed bottom-5 right-5"
        >
          <FontAwesomeIcon icon={faArrowUp} className="text-4xl text-black" />
        </button>
      )}
    </div>
  );
};

export default BottomToTop;
