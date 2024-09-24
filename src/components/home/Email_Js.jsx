"use client";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import VanillaTilt from "vanilla-tilt";

export const Email_js = () => {
  const [send, setSend] = useState(true);
  const form = useRef();
  const tiltRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_51wz7zs", "template_bg87yjr", form.current, {
        publicKey: "Cyy3JndSjkpMQMmui",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSend(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      max: 25,
      speed: 400,
      scale: 1.1,
      glare: true,
      "max-glare": 0.5,
    });

    return () => {
      tiltRef.current.vanillaTilt.destroy();
    };
  }, []);

  return (
    <div className="h-screen bg-gray-500 flex justify-center items-center">
      <div
        ref={tiltRef}
        className="w-[400px] tilt-box flex justify-center bg-slate-800 items-center p-6 rounded-lg shadow-lg"
      >
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-center"
        >
          <div className="flex gap-5 items-center mb-4">
            <label className="border w-[100px] h-[40px] flex justify-center items-center hover:bg-red-900 text-white duration-300 border-red-400 bg-red-400">
              Name
            </label>
            <input
              className="bg-green-50 w-[200px] h-[40px] outline-none text-lg"
              type="text"
              name="user_name"
              required
            />
          </div>
          <div className="flex gap-5 mb-4">
            <label className="border w-[100px] h-[40px] flex justify-center items-center hover:bg-red-900 text-white duration-300 border-red-400 bg-red-400">
              Email
            </label>
            <input
              className="bg-green-50 w-[200px] h-[40px] outline-none text-lg"
              type="email"
              name="user_email"
              required
            />
          </div>
          <div className="flex gap-5 mb-4">
            <label className="border w-[100px] h-[40px] flex justify-center items-center hover:bg-red-900 text-white duration-300 border-red-400 bg-red-400">
              Message
            </label>
            <textarea
              className="bg-green-50 w-[200px] h-[80px] outline-none text-lg"
              name="message"
              required
            />
          </div>
          <input
            type="submit"
            className="py-3 px-5 bg-blue-400 hover:bg-blue-950 duration-300 text-white mt-4"
            value={`${send ? "Send" : "Done"}`}
            onClick={() => setSend(false)}
          />
        </form>
      </div>
    </div>
  );
};

export default Email_js;
