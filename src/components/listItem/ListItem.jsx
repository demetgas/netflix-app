import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./listItem.scss";
import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";

export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const history = useNavigate();
  const clicked = () => {
    history("/watch");
  };
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/en/0/04/The_Addams_Family.jpg"
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow onClick={clicked} />
              <Add />
              <ThumbUpAltOutlined />
              <ThumbDownAltOutlined />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 34 mins</span>
              <span>+9</span>
              <span>1993</span>
            </div>
            <div className="desc">
              The Addams Family try to rescue their beloved Uncle Fester from
              his gold-digging new love, a black widow named Debbie.
            </div>
            <div className="genre">Action,Fantasy,Dark Comedy,Horror</div>
          </div>
        </>
      )}
    </div>
  );
}
