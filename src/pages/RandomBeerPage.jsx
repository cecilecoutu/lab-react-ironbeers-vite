import Navbar from "../components/Navbar";
import React, { useEffect, useState } from "react";
import axios from "axios";
function RandomBeersPage() {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    // Function to fetch a random beer
    const fetchRandomBeer = async () => {
      try {
        const response = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers/random"
        );

        setRandomBeer(response.data);
      } catch (error) {
        console.error("Error fetching random beer:", error);
      }
    };

    // Call the function
    fetchRandomBeer();
  }, []);

  if (!randomBeer) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Random Beer Details</h2>
      <img src={randomBeer.image_url} alt={randomBeer.name} />
      <p>Name: {randomBeer.name}</p>
      <p>Tagline: {randomBeer.tagline}</p>
      <p>First Brewed: {randomBeer.first_brewed}</p>
      <p>Attenuation Level: {randomBeer.attenuation_level}</p>
      <p>Description: {randomBeer.description}</p>
      <p>Contributed By: {randomBeer.contributed_by}</p>
    </div>
  );
}

export default RandomBeersPage;
