import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiteContext } from "../Context/Context";

const SiteCat = () => {
  const { type } = useParams();
  const [apiData, setApiData] = useState([]);
  const { faCircle } = useContext(SiteContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://6628fe4854afcabd0737c636.mockapi.io/items`
        );
        setApiData(response.data);
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-6 m-auto">
      <div className=" col-span-1"></div>
      <div className=" col-span-5">
        {apiData.map((item, i) => {
          if (item.type == type) {
            return (
              <Link to={`/product/${item.id}`}>
              <div key={i} className="flex border-b w-2/3">
                <div className="w-1/4">
                  <img className="py-2" src={item.img1} alt="" />
                </div>
                <div className="w-4/5 ">
                  <div className="h-1/5 p-2">
                    {" "}
                    <span className="pr-2">{item.brand}</span>
                    <FontAwesomeIcon className="w-1 pr-2" icon={faCircle} />
                    <span>{item.name}</span>
                  </div>
                  <div className="h-1/5  p-2">
                    <span className="pr-2">{item.year}</span>
                    <FontAwesomeIcon className="w-1 pr-2" icon={faCircle} />
                    <span>{item.work}</span>
                  </div>
                  <div className="flex items-end h-3/5 p-2 justify-between">
                    <span>{item.location}</span>
                    <span>{item.price}</span>
                  </div>
                </div>
              </div>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};

export default SiteCat;
