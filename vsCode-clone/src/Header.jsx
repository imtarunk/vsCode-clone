import React from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  return (
    <div className="flex justify-around items-center">
      <div className="iconAndText flex justify-center items-center space-x-3">
        <div>
          <img
            src="https://chris-ayers.com/assets/images/vscode-logo.png"
            alt=""
            className="w-[28px]"
          />
        </div>
        <div>
          <h1 className="text-white font-bold text-xl">Visual Studio Code</h1>
        </div>
        <div className="features space-x-8 flex text-[#9ba3b4] m-2 p-2">
          <h1>Docs</h1>
          <h1>Updates</h1>
          <h1>Blog</h1>
          <h1>API</h1>
          <h1>Extensions</h1>
          <h1>FAQ</h1>
        </div>
      </div>

      <div>
        <div className="flex space-x-3 items-center">
          <IoSunnyOutline size={"24px"} color="#9ba3b4" />
          <div className="flex items-center space-x-2 border border-gray-600 p-1 rounded-md ">

            <IoIosSearch size={"20px"} color="#9ba3b4" />
            <input
              type="text"
              name=""
              id=""
              placeholder="Search Docs"
              className=""
            />
          </div>
          <button className="bg-[#0078d4] text-white font-bold px-4 py-1 rounded-md">
            Download
          </button>
        </div>
      </div>
    </div>

  );
};

export default Header;
