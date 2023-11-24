import { Link } from "react-router-dom";
function Navbar(props) {
  const styles = {
    link: {
      margin: "20px",
    },
  };
  return (
    <nav>
      <Link to={"/"}>Home</Link>
    </nav>
  );
}

export default Navbar;
