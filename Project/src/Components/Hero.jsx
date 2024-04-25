import React, { useContext, useState } from "react";
import backgroundImage from "../../heroPic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactSlider from "react-slider";
import "./Range.css";
import { SiteContext } from "../Context/Context";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {faMagnifyingGlass,faCaretDown} = useContext(SiteContext)

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "500px",
        alignItems: "center",
      }}
    >
      <div className="w-full h-1/4 flex flex-col items-center justify-center text-3xl text-lime-300">
        <div className=" p-0  flex items-center mt-5">
          <FontAwesomeIcon className="absolute pl-3" icon={faMagnifyingGlass} />
          <input
            className="p-3 pl-12 rounded-3xl outline-none"
            type="text"
            placeholder="Search"
          />
        </div>
        <div>
          <span className="m-2 text-base bg-slate-400 rounded-3xl p-1">
            kjfg
          </span>
          <span className="m-2 text-base bg-slate-400 rounded-3xl p-1">
            dofovjb
          </span>
          <span className="m-2 text-base bg-slate-400 rounded-3xl p-1">
            dfv
          </span>
          <span className="m-2 text-base bg-slate-400 rounded-3xl p-1">
            bdf
          </span>
          <span className="m-2 text-base bg-slate-400 rounded-3xl p-1">
            dfb
          </span>
          <span className="m-2 text-base bg-slate-400 rounded-3xl p-1">
            dbfdbd
          </span>
          <span className="m-2 text-base bg-slate-400 rounded-3xl p-1">
            befrg
          </span>
          <span className="m-2 text-base bg-slate-400 rounded-3xl p-1">
            grbfgr
          </span>
          <span className="m-2 text-base bg-slate-400 rounded-3xl p-1">
            rthtr
          </span>
        </div>
      </div>
      <div className="h-3/4 flex justify-end items-center w-fit flex-col m-auto">
        <button className="py-3 px-8 border rounded-full text-2xl font-semibold flex mr-auto ">
          More info
        </button>
        <div className="bg-white flex items-center gap-10 py-5 px-20  mt-3 -mb-12 border ">
          <button className="bg-lime-500 rounded-full py-3 px-8 ">Show</button>
          <div className="w-52">
            <ReactSlider
              className="horizontal-slider flex items-center "
              thumbClassName="example-thumb "
              trackClassName="example-track"
              markClassName="bg-black"
              defaultValue={[0, 100]}
              ariaLabelledby={["first-slider-label", "second-slider-label"]}
              ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
              renderThumb={(props, state) => (
                <div {...props}>{state.valueNow}</div>
              )}
              minDistance={1}
            />
          </div>
          <div
            onClick={() => {
              if (isOpen) {
                setIsOpen(false);
              } else {
                setIsOpen(true);
              }
            }}
            className="text-lg font-semibold cursor-pointer py-5"
          >
            <p className="inline pr-20">Brand,Model</p>
            <FontAwesomeIcon icon={faCaretDown} />
            <div
              className={
                isOpen
                  ? "bg-white absolute w-svw h-svh left-0 top-0 z-10 flex items-center justify-center backdrop-blur-sm bg-opacity-10 cursor-default"
                  : "hidden"
              }
            >
              <div
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="bg-white p-5"
              >
                <p>Choose brand and model</p>
                <p className="text-sm">Choose your intended brand and model</p>
                <div className=" p-0  flex items-center mt-5 border">
                  <FontAwesomeIcon
                    className="absolute pl-3"
                    icon={faMagnifyingGlass}
                  />
                  <input
                    className="p-3 pl-12 rounded-3xl outline-none"
                    type="text"
                    placeholder="Search"
                  />
                </div>
                {/* <div></div> */}
                <div className="grid grid-cols-2">
                  <button onClick={()=>{setIsOpen(false)}} className="border mt-5 py-2 rounded-3xl mr-2">
                    Close
                  </button>
                  <button className="border mt-5 py-2 rounded-3xl bg-lime-400">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
