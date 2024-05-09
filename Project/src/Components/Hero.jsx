import React, { useContext, useState, useEffect } from "react";
import backgroundImage from "../../heroPic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactSlider from "react-slider";
import "./Range.css";
import { SiteContext } from "../Context/Context";
import Modal from "./Modal";
import ModalName from "./ModalName";
import Search from "./Search";

const Hero = () => {
  const { faCaretDown, isOpen, setIsOpen, seeName } = useContext(SiteContext);

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
        <div className=" p-0  flex items-center mt-5 w-2/3 justify-center ">
          <Search />
        </div>

      </div>
      <div className="h-3/4 flex justify-end w-2/4 flex-col m-auto ">
        <button className="py-3 px-8 border rounded-full text-2xl font-semibold flex mr-auto scale-75 md:scale-100">
          More info
        </button>
        <div className="bg-white flex flex-col-reverse md:flex-row items-center gap-10 py-5 px-10  mt-3 -mb-12 border ">
          <button className="bg-lime-500 rounded-full py-3 px-12 w-2/12 flex justify-center">
            Show
          </button>
          <div className="w-7/12">
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
              setIsOpen((prev) => !prev);
            }}
            className="w-3/12 flex items-center justify-center"
          >
            <p className="inline cursor-pointer">Brand,Model</p>
            <FontAwesomeIcon icon={faCaretDown} />
            {isOpen && <Modal />}
            {seeName && <ModalName />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
