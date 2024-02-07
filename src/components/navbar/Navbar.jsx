import "./navbar.scss";
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img
            className="img1"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt=""
          />
          <span>Home</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search />
          <span>KID</span>
          <Notifications />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
