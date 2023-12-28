import React from "react";
import "../component/Tv.css";
import tvtag1 from "../images/Mini/bb.jpg";
import tvtag2 from "../images/Mini/got.jpg";
import tvtag3 from "../images/Mini/pb.jpg";
import tvtag4 from "../images/Mini/loki_lob_crd_04.jpg";
import tvtag5 from "../images/Mini/Last of us.jpeg";
import tvtag6 from "../images/Mini/freinds.jpg";
import tvtag7 from "../images/Mini/st.jpg";
import tvtag8 from "../images/Mini/Boys.webp";
import tvtag9 from "../images/Mini/Batman.jpg";
import tvtag10 from "../images/Mini/MIndhunter.jpg";
import tvtag11 from "../images/Mini/from.jpg";
import tvtag12 from "../images/Mini/Foundation_TV_Series-328382265-large.jpg";

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
