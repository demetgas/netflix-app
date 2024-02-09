import { useEffect, useState } from "react";
import "./navbar.scss";
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
const Navbar = ({ setType }) => {
  const navigate = useNavigate();
  const logOut = () => {
    navigate("/register");
  };
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt=""
          />
          <span onClick={() => setType("")}>Home</span>
          <span onClick={() => setType("Series")}>Series</span>
          <span onClick={() => setType("Movies")}>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            className="img1"
            src="https://www.allkpop.com/upload/2022/06/content/051737/1654465030-a2b874f2-0fa1-49d8-8e86-b690bdf98a3e.jpeg"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span onClick={logOut}>Log Out</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
