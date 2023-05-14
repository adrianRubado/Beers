import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
useParams;

const Details = () => {
  const [beer, setBeer] = useState([]);
  const params = useParams();

  useEffect(() => {
    const beer = async () => {
      const beers = await axios.get(
        "https://raw.githubusercontent.com/ORT-PabloFernandez/PNTP2-REACT-EJEMPLO/main/src/data/Beers.json"
      );
      console.log(beers.data);
      setBeer(beers.data[params.id]);
    };
    beer();
  }, []);
  return (
    <div>
      <h2>{beer.name}</h2>
      <h3>{beer.type}</h3>
      <h4>{beer.abv}</h4>
      <Link to={"/beers"}>
        <button
          type="button"
          className={`mt-10 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900`}
        >
          Go to the homePage
        </button>
      </Link>
    </div>
  );
};

export default Details;
