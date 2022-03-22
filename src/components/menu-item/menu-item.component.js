import "./menu-item.scss";
import React from "react";
const MenuItem = ({ id, title, imageUrl, size }) => {
  return (
    <div className={`menu-item ${size}`} key={id}>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="background-image"
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
