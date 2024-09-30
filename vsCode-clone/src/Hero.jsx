import React from "react";
import img1 from "./assets/img1.png";
import langIcon from "./assets/langIcon.png";

const Hero = () => {
  return (
    <div className="flex flex-col items-center ">
      {/* Version Info */}
      <p className="text-[#9ba3b4] text-sm pt-[50px]">
        <span className="text-[#4daafc] font-semibold">
          Version 1.93{" "}
        </span>
        is now available! Read about the new features and fixes from August.
      </p>

      {/* Main Content Section */}
      <div className="flex justify-start items-center py-[5%] px-5 pt-0">
        <div className="m-10 flex flex-col space-y-7">
          {/* Left Text Box */}
          <div className="p-[50px] space-y-7">
            <div
              className="px-1 rounded-full text-[#9ba3b4] flex justify-center items-center text-sm py-2"
              style={{
                border: "2px solid rgba(255, 255, 255, 0.07)",
                background: "rgba(255, 255, 255, 0.04)",
              }}
            >
              Free. Built on open source. Runs everywhere
            </div>
            <div>
              <h1 className="text-white text-6xl font-bold">Code Editing.</h1>
              <h1 className="text-white text-6xl font-bold">Redefined.</h1>
            </div>
            <button className="text-white bg-[#0078d4] px-5 py-2.5 text-xl rounded-md">
              Download for macOS
            </button>
            <div className="space-y-2">
              <p className="text-[#4daafc]">
                Web, insiders edition, <span>or</span> other platforms
              </p>
              <p className="text-sm text-[#9ba3b4]">
                By using VS Code, you agree to its{" "}
                <span className="text-[#4daafc] font-semibold">license</span> and{" "}
                <span className="text-[#4daafc] font-semibold">privacy statement.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div>
          <img src={img1} width={"750px"} alt="VS Code Example" className="rounded-lg" />
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="flex justify-start items-center px-5 py-[5%]" style={{
        borderTop: "2px solid rgba(255, 255, 255, 0.07)",
        background: "rgba(255, 255, 255, 0.04)",
      }}>
        <div className="m-10 bg-transparent">
          {/* Left Text Box */}
          <div className="p-[50px] space-y-4 bg-transparent">
            <h1 className="text-white text-4xl font-bold bg-transparent">Code in any language</h1>
            <p className="text-[#9ba3b4] text-md leading-relaxed bg-transparent">
              VS Code supports almost every major programming language. Several ship in the box, like JavaScript, TypeScript, CSS, and HTML, but extensions for others can be found in the VS Code Marketplace.
            </p>
          </div>
        </div>
        <img
          src={langIcon}
          width={"55%"}
          alt="Language Support Icon"
          className="rounded-lg bg-transparent" // Add bg-transparent if there's a parent with a color
        />
      </div>
    </div>
  );
};

export default Hero;
