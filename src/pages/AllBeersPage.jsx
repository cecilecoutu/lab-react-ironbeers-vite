import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function AllBeersPage(props) {
  const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}`)
      .then((res) => {
        setBeers(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <h1>All Beers</h1>
      <ul>
        {beers.map((beers) => (
          <li key={beers._id}>
            <img src={beers.image_url} alt={beers.name} />
            <h2>{beers.name}</h2>
            <p>{beers.tagline}</p>
            <p>Contributed by: {beers.contributed_by}</p>
            <Link to={`/beers/${beers._id}`}>Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllBeersPage;
