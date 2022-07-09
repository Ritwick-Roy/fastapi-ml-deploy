import { Link } from "react-router-dom";

const Navbar = () => {
  //created by "sfc"-stateless functional component
  return (
    <nav className="navbar">
      <h1>Sputnik</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/predict"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          Predict
        </Link>
        <Link to="/appointments">Appointments</Link>
      </div>
    </nav>
  );
};

export default Navbar;
