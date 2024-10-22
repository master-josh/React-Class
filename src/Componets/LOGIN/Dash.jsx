import React from "react";
import { CiBank,CiSettings  } from "react-icons/ci";
import { BsSend } from "react-icons/bs";
import { PiHandWithdrawLight } from "react-icons/pi";

function Dash() {
  return (
    <>
      <div className="bg-gradient-to-r from-gray-600 to-gray-800 text-white h-[16rem] w-[60rem] rounded-2xl ml-9 mt-9 pl-10 pt-10 relative mx-auto">
        <div className="flex items-center gap-1">
          <img
            src="https://img.freepik.com/premium-vector/man-with-shirt-that-says-he-is-character_1148251-226.jpg?w=740"
            className="bg-white h-[3rem] w-[3rem] rounded-full"
          />
          <div>
            <span className="text-2xl font-semibold"> Welcome user</span>
            <p>Good Morning</p>
          </div>
        </div>
        <div>
          <div className="flex absolute text-5xl right-10 mb-14">
          $0. <span className="text-2xl">00</span>
          </div>
        </div>
        <div className="flex gap-10 items-center justify-center absolute bottom-10 right-10">
          <div className="bg-gray-500 text-white w-16 h-14 rounded-lg flex items-center justify-center hover:bg-slate-600"><CiBank className="text-4xl"/></div>
          <div className="bg-gray-500 text-white w-16 h-14 rounded-lg flex items-center justify-center hover:bg-slate-600"><BsSend className="text-3xl"/></div>
          <div className="bg-gray-500 text-white w-16 h-14 rounded-lg flex items-center justify-center hover:bg-slate-600"><PiHandWithdrawLight className="text-4xl"/></div>
          <div className="bg-gray-500 text-white w-16 h-14 rounded-lg flex items-center justify-center hover:bg-slate-600"><CiSettings className="text-4xl"/></div>
        </div>
      </div>
    </>
  );
}

export default Dash;
