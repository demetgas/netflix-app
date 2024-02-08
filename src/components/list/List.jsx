import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import "./list.scss";
import React, { useRef } from "react";
import ListItem from "../listItem/ListItem";

export default function List() {
  const listRef = useRef();
  const handleClick = (direction) => {
    if (direction === "left") {
    }
  };
  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          onClick={() => handleClick("left")}
          className="arrows left"
        />
        <div className="container">
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        <ArrowForwardIosOutlined
          onClick={() => handleClick("right")}
          className="arrows right"
        />
      </div>
    </div>
  );
}
