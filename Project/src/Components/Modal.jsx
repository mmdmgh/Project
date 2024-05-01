import React, { useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiteContext } from "../Context/Context";

const Modal = (e) => {
  const { faMagnifyingGlass, apiData, closeHandler, seeName, setSeeName,setNames } =
    useContext(SiteContext);
  const brands = {};
  apiData.forEach((item) => {
    if (brands[item.brand]) {
      brands[item.brand] += 1;
    } else {
      brands[item.brand] = 1;
    }
  });

  const brandlist = Object.keys(brands);
  return (
    <div>
      <div className="text-lg font-semibold cursor-pointer py-5">
        <div
          className={
            " fixed w-dvw h-dvh left-0 top-0 z-10 flex items-center justify-center backdrop-blur-sm bg-opacity-10 cursor-default "
          }
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="bg-white p-5 w-1/4 h-max"
          >
            <p>Choose brand and model</p>
            <p className="text-sm">Choose your intended brand and model</p>
            <div className=" p-0  flex items-center mt-5 border">
              <FontAwesomeIcon
                className="absolute pl-3"
                icon={faMagnifyingGlass}
              />

              <input
                className="p-3 pl-12 w-11/12 rounded-3xl outline-none"
                type="text"
                placeholder="Search"
              />
            </div>
            <div>
              {brandlist.map((brandName, j) => {
                return (
                  <div
                    key={j}
                    onClick={() => {
                      setSeeName((prev) => !prev);
                      setNames(brandName);
                    }}
                    className="cursor-pointer"
                  >
                    {brandName}
                  </div>
                );
              })}
            </div>
            <div className="grid grid-cols-2">
              <button
                onClick={() => {
                  closeHandler(e);
                }}
                className="border mt-5 py-2 rounded-3xl mr-2"
              >
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
  );
};

export default Modal;
