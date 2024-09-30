import React from "react";
import img1 from "./assets/img1.png";

const Hero = () => {
  return (
    <div className="flex flex-col items-center m-5">
      <p className="text-[#9ba3b4] text-sm">
        <span className="text-[#4daafc] text-decoration-style: solid">
          Version 1.93{" "}
        </span>
        is now available! Read about the new features and fixes from Augest
      </p>
      <div className="flex justify-start items-center">
        <div className="m-10">
        // left text box
          <div className="p-[50px] space-y-7 ">
            <div
              className="px-1 rounded-full text-[#9ba3b4] flex justify-center items-center text-sm py-2"
              style={{
                border: "2px solid rgba(255, 255, 255, 0.07)",
                background: "rgba(255, 255, 255, 0.04)",
              }}>
              Free. Bult on open source. Runs everywhere
            </div>
            <div>
              <h1 className="text-white text-6xl font-bold">Code Editing.</h1>
              <h1 className="text-white text-6xl font-bold">Redefined.</h1>
            </div>
            <button className="text-white bg-[#0078d4] px-5 py-2.5 text-xl rounded-md">
              Download for macOS
            </button>
            <div className="space-y-2">
              <p className="text-[#4daafc] text-decoration-style: solid">
                Web,insiders edition, <span>or</span> other platforms
              </p>
              <p className="text-sm text-[#9ba3b4]">
                By using Vs Code, you agree to its <span className="text-[#4daafc] text-decoration-style: solid">licence</span> and <span className="text-[#4daafc] text-decoration-style: solid">privacy statement.</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={img1} width={"750px"} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
