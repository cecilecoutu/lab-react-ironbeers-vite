import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function BeerDetailsPage() {
  const API_URL = "https://ih-beers-api2.herokuapp.com/beers/:id";
  const { beerId } = useParams();
  const navigate = useNavigate();

  const [beerDetails, setBeerDetails] = useState([]);
  useEffect(() => {
    console.log(beerId);
  }, []);

  useEffect(() => {
    const fetchBeerDetails = async () => {
      try {
        const response = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
        );

        console.log("Beer Details:", response.data);

        setBeerDetails(response.data);
      } catch (error) {
        console.error("Error fetching beer details:", error);
      }
    };

    fetchBeerDetails();
  }, [beerId]);

  if (!beerDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Details for Beer with ID {beerId}</h2>

      <img src={beerDetails.image_url} alt={beerDetails.name} />
      <h2>{beerDetails.name}</h2>
      <p>{beerDetails.tagline}</p>
      <p>{beerDetails.first_brewed}</p>
      <p>{beerDetails.attenuation_level}</p>
      <p>{beerDetails.description}</p>
      <p>{beerDetails.contributed_by}</p>
    </div>
  );
}

export default BeerDetailsPage;
