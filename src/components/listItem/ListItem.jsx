import "./listItem.scss";
import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";

export default function ListItem() {
  return (
    <div className="listItem">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/0/04/The_Addams_Family.jpg"
        alt=""
      />
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow />
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
          The Addams Family try to rescue their beloved Uncle Fester from his
          gold-digging new love, a black widow named Debbie.
        </div>
        <div className="genre">Action,Fantasy,Dark Comedy,Horror</div>
      </div>
    </div>
  );
}
