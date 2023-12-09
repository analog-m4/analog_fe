import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error-container flex justify-center h-screen mt-5">
      <div
        className="error flex flex-col items-center justify-center w-9/12 h-1/2 border-green-200 rounded-5"
        style={{ backgroundColor: "rgba(0, 0, 0, .1)" }}
      >
        <Link to="/" className="no-underline">
          <button className="return-home text-xs text-white flex items-center font-lato bg-purple-600 h-10 self-center pl-5 pr-5 rounded-3xl cursor-pointer hover:bg-purple-500 ">
            Return to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Error;
