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
        src="https://i1.sndcdn.com/artworks-sH9jc1uxQUfOQKUF-wsqYqA-t500x500.jpg"
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
