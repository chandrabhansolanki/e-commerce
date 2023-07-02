import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state?.resumeReducer?.cart);

  return (
    <>
      <nav className="navbarContainer">
        <Link to="/">
          <div className="title">
            <h1>ShoppingHub</h1>
          </div>
        </Link>
        <div className="cartContainer">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/cart">
            <div style={{ position: "relative" }}>
              <ShoppingCartIcon />
              <div style={{ position: "absolute", top: "-6px", right:'-6px' }}>
                {cart.length}
              </div>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
