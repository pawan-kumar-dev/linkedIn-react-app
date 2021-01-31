import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
const Sidebar = () => {
  const recentItems = (items) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{items}</p>
      </div>
    );
  };
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://png.pngtree.com/thumb_back/fw800/background/20190222/ourmid/pngtree-cool-gradient-fireworks-technology-background-material-backgroundgradientcolorfireworks-backgroundtechnical-materialposter-image_50058.jpg"
          alt="banner"
        />
        <Avatar className="sidebar__avatar" />
        <h2>Pawan Kumar</h2>
        <h4>pawan.kv612@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you?</p>
          <p className="sidebar__sidebarCount">23445</p>
        </div>
        <div className="sidebar__stat">
          <p>Who viewed you?</p>
          <p className="sidebar__sidebarCount">23445</p>
        </div>
      </div>
      <div className="sidebar__button">
        <h5>Recent</h5>
        {recentItems("react.js")}
        {recentItems("javascript")}
        {recentItems("Software")}
        {recentItems("developer")}
        {recentItems("Next.js")}
      </div>
    </div>
  );
};

export default Sidebar;
