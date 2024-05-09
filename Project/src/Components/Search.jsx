import React, { useContext, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiteContext } from "../Context/Context";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const { faMagnifyingGlass } = useContext(SiteContext);
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(
        `https://6628fe4854afcabd0737c636.mockapi.io/items`
      );

      const filteredData = response.data.filter(
        (item) =>
          (item.name &&
            item.name.toLowerCase().includes(query.toLowerCase())) ||
          (item.brand && item.brand.toLowerCase().includes(query.toLowerCase()))
      );

      setResults(filteredData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="bg-white p-2 rounded w-3/4 flex">
          <input
            placeholder="Search"
            type="text"
            value={query}
            onChange={handleChange}
            className="focus:outline-none w-full placeholder-slate-300"
            onFocus={() => {
              setIsFocused(true);
            }}
          />
          <button className="w-1/4" type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </form>
      {isFocused && (
        <ul className=" bg-white overflow-auto max-h-52 absolute p-3 text-lg">
          {results.map((result) => {
            return (
              <Link to={`/product/${result.id}`}>
                <li
                  className="shadow-sm w-full p-3 hover:bg-slate-400 "
                  key={result.id}
                >
                  {result.brand}
                  <span>{` ${result.name}`}</span>
                </li>
              </Link>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Search;
