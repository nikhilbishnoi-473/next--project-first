"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Email_js = () => {
  const [send, setSend] = useState(true);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_51wz7zs", "template_bg87yjr", form.current, {
        publicKey: "Cyy3JndSjkpMQMmui",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className=" h-screen bg-gray-500 flex justify-center items-center">
      <form
        ref={form}
        onSubmit={sendEmail}
        className=" flex flex-col items-center"
      >
        <div className=" flex gap-5 items-center">
          <label className="border w-[100px] h-[40px] flex justify-center items-center hover:bg-red-900 text-white duration-300 border-red-400 bg-red-400">
            Name
          </label>
          <input
            className="bg-green-50 w-[200px] h-[40px] list-none outline-none text-lg"
            type="text"
            name="user_name"
          />
        </div>
        <div className=" flex gap-5 pt-8">
          <label className="border w-[100px] h-[40px] flex justify-center items-center hover:bg-red-900 text-white duration-300 border-red-400 bg-red-400">
            Email
          </label>
          <input
            className="bg-green-50 w-[200px] h-[40px] list-none outline-none text-lg"
            type="email"
            name="user_email"
          />
        </div>
        <div className=" flex gap-5 pt-8">
          <label className="border w-[100px] h-[40px] flex justify-center items-center hover:bg-red-900 text-white duration-300 border-red-400 bg-red-400">
            Message
          </label>
          <textarea
            className="bg-green-50 w-[200px] h-[40px] list-none outline-none text-lg"
            name="message"
          />
        </div>
        <input
          type="submit"
          className="py-3 px-5 bg-blue-400 hover:bg-blue-950 duration-300 text-white mt-10"
          onClick={() => setSend(!send)}
          value={`${send ? "send" : "done"}`}
        />
      </form>
    </div>
  );
};
export default Email_js;
