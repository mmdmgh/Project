import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaravan,
  faAngleDown,
  faUser,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [isHoveredMyAccount, setIsHoveredMyAccount] = useState(false);
  const [isHoveredCars, setIsHoveredCars] = useState(false);
  const [isHoveredMotors, setIsHoveredMotors] = useState(false);
  const [isHoveredTruck, setIsHoveredTruck] = useState(false);
  const [isHoveredContact, setIsHoveredContact] = useState(false);

  return (
    <div className="flex justify-between items-center overflow-hidden	">
      <ul className="flex gap-10 ml-10  ">
        <li
          onMouseEnter={() => setIsHoveredCars(true)}
          onMouseLeave={() => setIsHoveredCars(false)}
          className="py-5"
        >
          Cars
          <div
            className={isHoveredCars ? "block bg-slate-700" : "hidden"}
            style={{ position: "absolute" }}
          >
            jhvdfvjhf
          </div>
        </li>
        <li
          onMouseEnter={() => setIsHoveredMotors(true)}
          onMouseLeave={() => setIsHoveredMotors(false)}
          className="py-5"
        >
          Motors
          <div
            className={isHoveredMotors ? "block bg-slate-700" : "hidden"}
            style={{ position: "absolute" }}
          >
            jhvdfvjhf
          </div>
        </li>
        <li
          onMouseEnter={() => setIsHoveredTruck(true)}
          onMouseLeave={() => setIsHoveredTruck(false)}
          className="py-5"
        >
          Truck
          <div
            className={isHoveredTruck ? "block bg-slate-700" : "hidden"}
            style={{ position: "absolute", maxWidth: "200px", zIndex: "1" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            iure porro voluptas ad nesciunt quod mollitia voluptatum maiores,
            corporis esse dolores, illum magnam quos autem delectus. Recusandae
            accusantium sequi voluptatem, deleniti nulla consequuntur corporis
            eveniet sed nihil? A, nam accusantium placeat pariatur ipsa illo, in
            suscipit sequi voluptas fugiat molestias.
          </div>
        </li>
        <li
          onMouseEnter={() => setIsHoveredContact(true)}
          onMouseLeave={() => setIsHoveredContact(false)}
          className="py-5"
        >
          Contact
          <div
            className={isHoveredContact ? "block bg-slate-700" : "hidden"}
            style={{ position: "absolute" }}
          >
            jhvdfvjhf
          </div>
        </li>
      </ul>
      <FontAwesomeIcon icon={faCaravan} className="w-14 h-14" />
      <div>
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
              className={isHoveredMyAccount ? "block bg-slate-700" : "hidden"}
              style={{ position: "absolute" }}
            >
              {" "}
              jsdgvjf
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
