import React from "react";
import { useContext } from "react";
import { SiteContext } from "../Context/Context";
import Item from "./Item.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const ProductPreview = () => {
  const { apiData,faAngleRight } = useContext(SiteContext);

  return (
    <div className=" scale-75 mt-36">
      <div className="text-3xl flex justify-between mb-6">
        <p>Hot</p>
        <div className="flex items-center mr-10">
          <p>More</p>
          <FontAwesomeIcon className="mt-3 ml-6" icon={faAngleRight} />
        </div>
      </div>
      <div className="grid grid-cols-5">
        {apiData.map((item, i) => {
          if (item.id <= 5) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.img1}
                new_price={item.price}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default ProductPreview;
