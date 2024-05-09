import { createContext, useEffect, useState } from "react";
import axios from "axios";
import {
  faAngleRight,
  faMagnifyingGlass,
  faCaretDown,
  faCircle,
  faPhone,
  faRoad,
  faGasPump,
  faGear,
  faCarRear,
  faBrush,
  faCopyright,faBars
} from "@fortawesome/free-solid-svg-icons";

export const SiteContext = createContext({});

const SiteContextProvider = (props) => {
  const [apiData, setApiData] = useState([]);
  const [isOpen,setIsOpen] = useState(false)
  const [seeName, setSeeName] = useState(false);
  const [names, setNames] = useState();

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

  const closeHandler = ()=>{
    setIsOpen(false)
  }
  
  const closeSee = ()=>{
    setSeeName(false)
  }




  const contextValue = {
    apiData,
    faAngleRight,
    faMagnifyingGlass,
    faCaretDown,
    faCircle,
    faPhone,
    faRoad,
    faGasPump,
    faGear,
    faCarRear,
    faBrush,
    faCopyright,
    faBars,
    closeHandler,
    isOpen,
    setIsOpen,
    seeName,
    setSeeName,
    closeSee,
    names,
    setNames,
  };

  return (
    <SiteContext.Provider value={contextValue}>
      {props.children}
    </SiteContext.Provider>
  );
};

export default SiteContextProvider;
