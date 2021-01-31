import React from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import PostAddIcon from "@material-ui/icons/PostAdd";
const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOption">
          <InputOption title="Posts" color="#7005F9" Icon={PostAddIcon} />
        </div>
      </div>
    </div>
  );
};

export default Feed;
