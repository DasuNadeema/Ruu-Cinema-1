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
        <div className="box">
          <div className="box-img">
            <img src={tvtag2} alt="" />
          </div>
          <h3>Game of Thrones</h3>
          <span>Epi 10 | Season 10</span>
        </div>{" "}
        <div className="box">
          <div className="box-img">
            <img src={tvtag3} alt="" />
          </div>
          <h3>Peaky Blinders</h3>
          <span>Epi 8 | Season 8</span>
        </div>{" "}
        <div className="box">
          <div className="box-img">
            <img src={tvtag4} alt="" />
          </div>
          <h3>Loki</h3>
          <span>Epi 8 | Season 2</span>
        </div>{" "}
        <div className="box">
          <div className="box-img">
            <img src={tvtag5} alt="" />
          </div>
          <h3>Last Of Us</h3>
          <span>Epi 12 | Season 2</span>
        </div>{" "}
        <div className="box">
          <div className="box-img">
            <img src={tvtag6} alt="" />
          </div>
          <h3>Friends</h3>
          <span>Epi 20 | Season 10</span>
        </div>{" "}
        <div className="box">
          <div className="box-img">
            <img src={tvtag7} alt="" />
          </div>
          <h3>Stranger Things</h3>
          <span>Epi 8 | Season 4 </span>
        </div>{" "}
        <div className="box">
          <div className="box-img">
            <img src={tvtag8} alt="" />
          </div>
          <h3>The Boys</h3>
          <span>Epi 10 | Season 5</span>
        </div>{" "}
        <div className="box">
          <div className="box-img">
            <img src={tvtag9} alt="" />
          </div>
          <h3>The Batman</h3>
          <span>Epi 12 | Season 1</span>
        </div>{" "}
        <div className="box">
          <div className="box-img">
            <img src={tvtag10} alt="" />
          </div>
          <h3>Mind Hunter</h3>
          <span>Epi 10 | Season 1</span>
        </div>{" "}
        <div className="box">
          <div className="box-img">
            <img src={tvtag11} alt="" />
          </div>
          <h3>From</h3>
          <span>Epi 7 | Season 2</span>
        </div>{" "}
        <div className="box">
          <div className="box-img">
            <img src={tvtag12} alt="" />
          </div>
          <h3>Foundation</h3>
          <span>Epi 8 | Season 5</span>
        </div>{" "}
      </div>
    </>
  );
}

export default Tv;
