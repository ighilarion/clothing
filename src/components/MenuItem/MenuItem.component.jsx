import { render } from "@testing-library/react";
import React from "react";
import { withRouter } from "react-router-dom";
import "./MenuItem.style.scss";

const MenuItem = ({ title, imageUrl, size, link, match, history }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${link}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></div>

    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
