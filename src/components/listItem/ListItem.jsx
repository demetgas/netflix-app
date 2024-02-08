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
      </div>
    </div>
  );
}
