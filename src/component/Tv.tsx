import React from "react";
import "../component/Tv.css";
import tvtag1 from "../images/Mini/Last of us.jpeg";
import Schedule from "./Schedule";

function Tv() {
  return (
    <>
      <div className="tv">
        <h4> TV SHOWS</h4>
        <div className="t-categories">
          <div className="categories">
            <ul>
              <li className="important">
                <a href="#">All</a>
              </li>
              <li>
                <a href="#">Hindi</a>
              </li>
              <li>
                <a href="#">Korean</a>
              </li>
              <li>
                <a href="#">English</a>
              </li>
              <li>
                <a href="#">Tamil</a>
              </li>
              <li>
                <a href="#">Other</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tv-shows">
        <div className="box">
          <div className="box-img">
            <img src={tvtag1} alt="" />
          </div>
          <h3>Breaking Bd</h3>
          <span>Epi 8 | Season 5</span>
        </div>
      </div>
    </>
  );
}

export default Tv;
