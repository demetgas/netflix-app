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
          <img
            className="img2"
            src="https://www.allkpop.com/upload/2022/06/content/051737/1654465030-a2b874f2-0fa1-49d8-8e86-b690bdf98a3e.jpeg"
            alt=""
          />
          <ArrowDropDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
