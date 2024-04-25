import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="hover:scale-105 max-w-max duration-300 pr-10	mb-10">
      
      <Link to={`/product/${props.id}`}>
        <img onClick={scrollToTop} src={props.image} alt="" />
      </Link>
      <p>{props.name}</p>
      <div className="flex gap-4">
        <div>${props.new_price}</div>
      </div>
    </div>
  );
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"});
};
}
export default Item;
