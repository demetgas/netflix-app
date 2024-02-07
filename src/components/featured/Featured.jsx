import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";

export default function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://images.ctfassets.net/co0pvta7hzrh/3AzyT7Cv2cDZk67HHr8zCe/56b3823bc62abcddbc52ae78b71eb270/Typeform-Blog-BlackFriday-Cover-AskAwesomely.jpg?fm=webp&q=75"
        alt=""
      />
      <div className="info">
        <img
          src="https://www.pngkey.com/png/full/466-4669366_white-chicks-image-white-chicks-movie-poster.png"
          alt=""
        />
        <span className="desc">
          Two FBI agent brothers, Marcus (Marlon Wayans) and Kevin Copeland
          (Shawn Wayans), accidentally foil a drug bust. As punishment, they are
          forced to escort a pair of socialites (Anne Dudek, Rochelle Aytes) to
          the Hamptons, where they're going to be used as bait for a kidnapper.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
