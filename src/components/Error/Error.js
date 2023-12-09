import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error-container flex justify-center h-screen mt-5">
      <div
        className="error flex flex-col items-center justify-end w-7/12 h-1/2 rounded-5"
        style={{ backgroundColor: "rgba(166, 80, 240, .5)" }}
      >
        <div
          className="error-circle flex flex-col items-center justify-center h-2/3 w-1/3 bg-purple-600 mb-4 mt-4 rounded-full"
          style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
        >
          <div className="text-5xl flex justify-center items-center w-72 font-fjalla italic">
            Er
            <div className="text-5xl font-fjalla italic text-purple-600 hover:animate-jump cursor-pointer">
              ror
            </div>
          </div>
          <div className="mt-3 text-base font-fjalla italic text-black w-7/12 align-center">
            Try checking your your URL, otherwise hang just hang tight
          </div>
        </div>
        <Link to="/" className="no-underline">
          <button className="return-home text-xs text-white flex items-center font-lato bg-purple-600 h-10 self-center pl-5 pr-5 rounded-3xl cursor-pointer hover:bg-purple-500 mb-5 hover:animate-jump ">
            Return to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Error;
