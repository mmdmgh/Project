import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { SiteContext } from "../Context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductDisplay = () => {
  const { productId } = useParams();
  const { faCircle, faPhone, faRoad, faGasPump, faGear, faCarRear, faBrush } =
    useContext(SiteContext);
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://6628fe4854afcabd0737c636.mockapi.io/items/${productId}`
        );
        setApiData(response.data);
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };
    fetchData();
  }, []);
  if (apiData.bodyStatus == "0") {
    apiData.bodyStatus = "Paintless";
  }
  if (apiData.bodyStatus == "1") {
    apiData.bodyStatus = "One paint spots";
  }
  if (apiData.bodyStatus == "2") {
    apiData.bodyStatus = "Two paint spots";
  }
  if (apiData.bodyStatus == "some") {
    apiData.bodyStatus = "Some paint spots";
  }
  return (
    <div className="grid grid-cols-2 justify-end w-2/3 m-auto mt-14">
      <div className="mt-20">
        <div className="mb-5">
          <span className="pr-2 text-2xl font-medium">{apiData.brand}</span>
          <FontAwesomeIcon className="w-1" icon={faCircle} />

          <span className="px-2 text-2xl font-medium">{apiData.name}</span>
        </div>
        <div className="mb-5">
          <span className="pr-2 text-lg font-normal">{apiData.year}</span>
          <FontAwesomeIcon className="w-1" icon={faCircle} />

          <span className="px-2 text-lg font-normal">{apiData.gearBox}</span>
        </div>
        <div className="flex justify-between mb-14">
          <span>{apiData.location}</span>
          <span className="mr-20">{apiData.price}</span>
        </div>
        <button className="px-20 py-3 bg-lime-400 rounded-full font-semibold ">
          <p>
            Call the seller <FontAwesomeIcon icon={faPhone} />
          </p>
        </button>
        <div className="grid grid-cols-3 mt-20 w-full">
          <div className="p-5 max-w-max flex flex-col items-center">
            <FontAwesomeIcon
              className="bg-gray-200 rounded-full p-5"
              icon={faRoad}
            />
            <p className="text-sm text-gray-400 font-thin">Mileage</p>
            <p className="font-medium">{apiData.work}</p>
          </div>
          <div className="p-5 max-w-max flex flex-col items-center">
            <FontAwesomeIcon
              className="bg-gray-200 rounded-full p-5"
              icon={faGasPump}
            />
            <p className="text-sm text-gray-400 font-thin">Fuel type</p>
            <p className="font-medium">{apiData.fuelType}</p>
          </div>
          <div className="p-5 max-w-max flex flex-col items-center -ml-10">
            <FontAwesomeIcon
              className="bg-gray-200 rounded-full p-5"
              icon={faCarRear}
            />
            <p className="text-sm text-gray-400 font-thin ">Body condition</p>
            <p className="font-medium">{apiData.bodyStatus}</p>
          </div>
          <div className="p-5 max-w-max flex flex-col items-center">
            <FontAwesomeIcon
              className="bg-gray-200 rounded-full p-5"
              icon={faGear}
            />
            <p className="text-sm text-gray-400 font-thin">Gearbox</p>
            <p className="font-medium">{apiData.gearBox}</p>
          </div>
          <div className="p-5 max-w-max flex flex-col items-center ">
            <FontAwesomeIcon
              className="bg-gray-200 rounded-full p-5"
              icon={faBrush}
            />
            <p className="text-sm text-gray-400 font-thin">Color</p>
            <p className="font-medium">{apiData.color}</p>
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-rows-1 gap-4">
          <img className="col-span-2" src={apiData.img1} alt="" />
          <img className="col-span-1" src={apiData.img2} alt="" />
          <img className="col-span-1" src={apiData.img3} alt="" />
        </div>
        <div>
          {" "}
          <p className="text-xl font-semibold mt-5">Description</p>{" "}
          {apiData.description}
        </div>
        <hr className="my-5" />
        <div className="text-xl font-semibold my-5">
          Technical specifications
        </div>
        <div className="grid grid-cols-4">
            <div>
                <p className="p-2 text-gray-400 font-thin text-sm">Engine size</p>
                <p className="p-2 font-medium">{apiData.motorCa}</p>
            </div>
            <div>
                <p className="p-2 text-gray-400 font-thin text-sm">Powertrain</p>
                <p className="p-2 font-medium">{apiData.cylinder}</p>
            </div>
            <div>
                <p className="p-2 text-gray-400 font-thin text-sm">Acceleration</p>
                <p className="p-2 font-medium">{apiData.accelT}</p>
            </div>
            <div>
                <p className="p-2 text-gray-400 font-thin text-sm">Fuel cons</p>
                <p className="p-2 font-medium">{apiData.Lper100}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
