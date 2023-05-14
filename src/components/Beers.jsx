import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Beers = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const beer = async () => {
      const beers = await axios.get(
        "https://raw.githubusercontent.com/ORT-PabloFernandez/PNTP2-REACT-EJEMPLO/main/src/data/Beers.json"
      );
      console.log(beers.data);
      setBeers(beers.data);
    };
    beer();
  }, []);
  return (
    <>
      <h1>Your best value proposition</h1>
      <h2 className="mt-5">
        “If you don’t try this app, you won’t become the superhero you were
        meant to be"
      </h2>
      <div className="mt-5 grid w-full gap-6 md:grid-cols-5">
        {beers.map((e, index) => (
          <div className="mt-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link to={`/beers/${index}`}>
              <img className="rounded-t-lg" src={e.label} alt="" />
            </Link>
            <div className="p-5">
              <Link to={`/beers/${index}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {e.name}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {e.type}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {`abv: ${e.abv}`}
              </p>
              <Link
                to={`/beers/${index}`}
                className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800`}
              >
                Read more
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Beers;
