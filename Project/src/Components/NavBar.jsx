import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaravan,
  faAngleDown,
  faUser,
  faPlus,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isHoveredMyAccount, setIsHoveredMyAccount] = useState(false);
  const [isHoveredCars, setIsHoveredCars] = useState(false);
  const [isHoveredMotors, setIsHoveredMotors] = useState(false);
  const [isHoveredTruck, setIsHoveredTruck] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <div className="flex justify-between items-center overflow-hidden	">
      <div className="w-1/3 flex">
        <div
          onClick={() => setMenu((prev) => !prev)}
          className="md:hidden ml-5"
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
        <ul
          className={
            menu ? "md:flex gap-10 ml-10" : "md:flex gap-10 ml-10 hidden"
          }
        >
          <li
            onMouseEnter={() => setIsHoveredCars(true)}
            onMouseLeave={() => setIsHoveredCars(false)}
            className="py-5"
          >
            Cars
            <div
              className={isHoveredCars ? "block bg-gray-300 " : "hidden"}
              style={{ position: "absolute", zIndex: "1" }}
            >
              <Link to="/car">
                <p className="p-3">Buy car</p>
              </Link>
              <hr />
              <p className="p-3">Sell your car</p>
            </div>
          </li>
          <li
            onMouseEnter={() => setIsHoveredMotors(true)}
            onMouseLeave={() => setIsHoveredMotors(false)}
            className="py-5"
          >
            Bike
            <div
              className={isHoveredMotors ? "block bg-gray-300" : "hidden"}
              style={{ position: "absolute", zIndex: "1" }}
            >
              <Link to="/motor">
                <p className="p-3">Buy bike</p>
              </Link>
              <hr />
              <p className="p-3">Sell your bike</p>
            </div>
          </li>
          <li
            onMouseEnter={() => setIsHoveredTruck(true)}
            onMouseLeave={() => setIsHoveredTruck(false)}
            className="py-5"
          >
            Truck
            <div
              className={isHoveredTruck ? "block bg-gray-300" : "hidden"}
              style={{ position: "absolute", maxWidth: "200px", zIndex: "1" }}
            >
              <Link to="/truck">
                <p className="p-3">Buy truck</p>
              </Link>
              <hr />
              <p className="p-3">Sell your truck</p>
            </div>
          </li>
          <li className="py-5">Contact</li>
        </ul>
      </div>
      <div>
        <Link to="/">
          <FontAwesomeIcon icon={faCaravan} className="w-14 h-14" />
        </Link>
      </div>
      <div className="w-fit">
        <ul className="flex gap-10 py-5">
          <li
            onMouseEnter={() => setIsHoveredMyAccount(true)}
            onMouseLeave={() => setIsHoveredMyAccount(false)}
          >
            <div>
              <FontAwesomeIcon
                icon={faUser}
                className="pr-2 w-5 h-5 text-slate-800"
              />
              <span className="pr-2">My account</span>
              <FontAwesomeIcon icon={faAngleDown} className="text-slate-800" />
            </div>
            <div
              className={isHoveredMyAccount ? "block bg-gray-300" : "hidden"}
              style={{ position: "absolute" }}
            >
              <Link to="/signup">
                <p className="p-3">Sign Up</p>
              </Link>
              <hr />
              <Link to="/login">
                <p className="p-3">Log in</p>
              </Link>
            </div>
          </li>

          <li className="mr-10 flex items-center gap-2 group">
            <FontAwesomeIcon
              icon={faPlus}
              className="border border-zinc-950 rounded-full p-2 text-slate-800 group-hover:bg-sky-800 transition "
            />
            <span>New car</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
