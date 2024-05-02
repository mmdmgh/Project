import React, { useContext } from "react";
import { SiteContext } from "../Context/Context";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ModalName = (brand) => {
  const { closeHandler, closeSee, names, apiData, faMagnifyingGlass } = useContext(SiteContext);
  closeHandler();
  return (
    <div
      onClick={closeSee}
      className="fixed top-0 left-0 z-20 w-dvw h-dvh flex justify-center items-center backdrop-blur-sm"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="bg-white p-5 w-1/4 h-5/6"
      >
        <div className="text-xl font-semibold py-2">
          Choose a model of {names}
        </div>

        {apiData.map((brandName, i) => {
          if (brandName.brand == names) {
            return (
              <div key={i} className="my-2 p-2 shadow">
                <Link onClick={scrollToTop} to={`/product/${brandName.id}`}>
                  <div>
                    <p>{brandName.name}</p>
                  </div>
                </Link>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};

export default ModalName;
