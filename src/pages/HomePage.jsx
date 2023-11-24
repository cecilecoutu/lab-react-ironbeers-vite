import Navbar from "../components/Navbar";
import React from "react";
import { Link } from "react-router-dom";

function HomePage(props) {
  const styles = {
    link: {
      margin: "20px",
    },
  };

  return (
    <div>
      <Link to={"/beers"}>All Beers</Link>
      <Link to={"/random-beer"}>Random Beer</Link>
      <Link to={"/new-beer"}>New Beer</Link>
    </div>
  );
}

export default HomePage;
