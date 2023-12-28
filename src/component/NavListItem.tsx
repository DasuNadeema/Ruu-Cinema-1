import React from "react";
import "../component/NavListItem.css";
import { Link } from "react-router-dom";
import NewPage from "../pages/HomePage";

function NavListItem({ nav }) {
  return (
    <>
      <div className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#">Movies</a>
        </li>
        <li>
          <a href="#">Tv Shows</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </div>
    </>
  );
}

export default NavListItem;
