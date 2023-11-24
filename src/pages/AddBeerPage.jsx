import Navbar from "../components/Navbar";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function AddBeerPage(props) {
  const API_URL = "https://ih-beers-api2.herokuapp.com/beers/new";
  const [formData, setFormData] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post(`${API_URL}/new-beer`, formData)
      .then((res) => {
        console.log("Beer added successfully!");
        navigate("/new-beer");
      })
      .catch((e) => console.log(e));
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h2>Add a New Beer</h2>
      <form onSubmit={handleSubmit}>
        <label style={{ width: "100%" }}>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <label style={{ marginRight: "50px", width: "100%" }}>
          Tagline:
          <input
            type="text"
            name="tagline"
            value={formData.tagline}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <label>
          First Brewed:
          <input
            type="text"
            name="first_brewed"
            value={formData.first_brewed}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <label>
          Brewer's Tips:
          <input
            type="text"
            name="brewers_tips"
            value={formData.brewers_tips}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <label>
          Attenuation Level:
          <input
            type="number"
            name="attenuation_level"
            value={formData.attenuation_level}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <label>
          Contributed By:
          <input
            type="text"
            name="contributed_by"
            value={formData.contributed_by}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <button type="submit">Add New</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
